const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const scoreEl = document.querySelector("#scoreEl");
const startGameButton = document.querySelector("#startGameButton");

const gameControll = document.querySelector("#gameControll");

const finalScore = document.querySelector("#finalScore");

let enemyRespornSpeed = Math.round(
  (1 / ((window.innerWidth + window.innerHeight) / 2 / 1000)) * 500
);
let enemy_valocety = Math.sqrt(window.innerWidth + window.innerHeight) / 2 / 35;

let accelerator = 1;

class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  drawPlayer() {
    //Specify to draw on screen
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
  }
}

class Projectile {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  drawProjectile() {
    //Specify to draw on screen
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
  }
  update() {
    this.drawProjectile();
    this.x = this.x + this.velocity.x * 4;
    this.y = this.y + this.velocity.y * 4;
  }
}

class Enemy {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  drawEnemy() {
    //Specify to draw on screen
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
  }
  update() {
    this.drawEnemy();
    accelerator = accelerator + 0.00001;
    this.x = this.x + this.velocity.x * (1 + accelerator);
    this.y = this.y + this.velocity.y * (1 + accelerator);
  }
}

const friction = 0.99;

class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alpha = 1;
  }
  drawParticle() {
    // context.save(); effects the code until restore
    context.save();
    context.globalAlpha = 0.1;
    //Specify to draw on screen
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
    context.restore();
  }
  update() {
    this.drawParticle();
    this.velocity.x *= friction;
    this.velocity.y *= friction;
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
    this.alpha -= 0.01;
  }
}

const x = canvas.width / 2;
const y = canvas.height / 2;
let projectiles = [];
let enemies = [];
let player = new Player(x, y, 10, "white");
let particles = [];

function init() {
  projectiles = [];
  enemies = [];
  player = new Player(x, y, 10, "white");
  particles = [];
  score = 0;
  scoreEl.innerHTML = "Score:" + score;
}

function spawnEnemies() {
  setInterval(function () {
    const radius = Math.random() * (30 - 4) + 4;
    let x;
    let y;

    //Math random 0 - 1 values, if < 05 then 0 - radius else
    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
      y = Math.random() * canvas.height;
    } else {
      x = Math.random() * canvas.width;
      y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }

    const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
    const velocity = {
      x: Math.cos(angle) * enemy_valocety,
      y: Math.sin(angle) * enemy_valocety,
    };
    enemies.push(new Enemy(x, y, radius, color, velocity));
  }, enemyRespornSpeed);
}

let animationId;
let score = 0;
function animate() {
  animationId = requestAnimationFrame(animate);
  context.fillStyle = "rgba(0,0,0,0.1)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.drawPlayer();
  particles.forEach(function (particle, particleIndex) {
    if (particle.alpha <= 0) {
      particles.splice(particleIndex, 1);
    } else {
      particle.update();
    }
  });
  projectiles.forEach(function (projectile, projectileIndex) {
    projectile.update();

    if (
      projectile.x + projectile.radius < 0 ||
      projectile.x - projectile.radius > canvas.width ||
      projectile.y - +projectile.radius < 0 ||
      projectile.y - projectile.radius > canvas.height
    ) {
      setTimeout(function () {
        projectiles.splice(projectileIndex, 1);
      }, 0);
    }
  });
  enemies.forEach(function (enemy, enemyIndex) {
    enemy.update();

    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
    if (dist - enemy.radius - player.radius < 1) {
      cancelAnimationFrame(animationId);
      finalScore.innerHTML = score;
      gameControll.style.display = "flex";
    }
    projectiles.forEach(function (projectile, projectileIndex) {
      const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);

      //when Projectile Touch enemy
      if (dist - enemy.radius - projectile.radius < 1) {
        for (let index = 0; index < enemy.radius * 5; index++) {
          particles.push(
            new Particle(
              projectile.x,
              projectile.y,
              Math.random() * 2,
              enemy.color,
              {
                x: (Math.random() - 0.5) * (Math.random() * 6),
                y: (Math.random() - 0.5) * (Math.random() * 6),
              }
            )
          );
        }

        if (enemy.radius - 10 > 5) {
          score += 100;
          scoreEl.innerHTML = "Score: " + score;
          gsap.to(enemy, { radius: enemy.radius - 10 });

          setTimeout(function () {
            projectiles.splice(projectileIndex, 1);
          }, 0);
        } else {
          score += 250;
          scoreEl.innerHTML = "Score: " + score;
          setTimeout(function () {
            projectiles.splice(projectileIndex, 1);
            enemies.splice(enemyIndex, 1);
          }, 0);
        }
      }
    });
  });
}

document.addEventListener("click", function (event) {
  const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
  );
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle),
  };
  projectiles.push(
    new Projectile(canvas.width / 2, canvas.height / 2, 5, "white", velocity)
  );
});

startGameButton.addEventListener("click", function () {
  init();
  animate();
  gameControll.style.display = "none";
  console.log(enemies);
});
spawnEnemies();
