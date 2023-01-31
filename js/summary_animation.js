
    let targetImage = new Image(0, 0);
    targetImage.src = '/images/target.png';
    document.body.appendChild(targetImage);

    let cannonWheelImage = new Image(0, 0);
    cannonWheelImage.src = '/images/cannon_wheel.png';
    document.body.appendChild(cannonWheelImage);

    let cannonImage = new Image(0, 0);
    cannonImage.src = '/images/cannon.png';
    document.body.appendChild(cannonImage);

    let cannonWorkImage = new Image(0, 0);
    cannonWorkImage.src = '/images/cannon_work.png';
    document.body.appendChild(cannonWorkImage);

    let lupeImage = new Image(0, 0);
    lupeImage.src = '/images/lupe.png';
    document.body.appendChild(lupeImage);

    let alreadyHit = localStorage.getItem('hit');




document.querySelectorAll('[id=gameCanvas]').forEach(function(element, canvasIndex){

    let startShot = true

    let canvas = element;
    let ctx = element.getContext('2d');

    let hit = false;
    let projectiles = [];
    let contentDraw = false;
    let custom_key = canvas.getAttribute('custom_key');

    class Brace{
        constructor(x, y, radius, color, velocity){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        }
        drawBrace(){
            //Specify to draw on screen
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();

        }
        update() {
            this.drawBrace();
            if(custom_key !== "work"){
                if (this.velocity.x > 0){
                    //top
                    this.y = this.y + this.velocity.y * 2 * -1;
                    this.x = this.x + Math.sin(this.y * 1 / canvas.height * 920 /180*Math.PI) * 1.5 * 400 / canvas.height;
            
                }else{
                    this.y = this.y + this.velocity.y * 2;
                    this.x = this.x + Math.sin(this.y * 1 / canvas.height * 920 /180*Math.PI-0.3) * 1.5 * 400 / canvas.height;
            
                }
            }else{
                if (this.velocity.x > 0){
                    //top
                    this.y = this.y + this.velocity.y * 2 * -1;
                    this.x = this.x + Math.sin(this.y * 1 / canvas.height * 920 /180*Math.PI) * -1.5 * 400 / canvas.height;
                }else{
                    this.y = this.y + this.velocity.y * 2;
                    this.x = this.x + Math.sin(this.y * 1 / canvas.height * 920 /180*Math.PI-0.3) * -1.5 * 400 / canvas.height;
                }
            }
            this.radius = this.radius - (0.01 / canvas.height * 1100);
        }
    }

    let angleVel = 2
    class Cannon{
        constructor(x, y, lenght, height, color, angleVel){
            this.x = x;
            this.y = y;
            this.lenght = lenght;
            this.height = height;
            this.color = color
            this.angle = angleVel;
        }
        drawCannon(){
            
            ctx.save();
            if(custom_key !== "work"){
                ctx.translate(this.x+40, this.y + this.height / 2);
            
                ctx.rotate(this.angle*Math.PI/180);
            
                ctx.translate(-this.x-40, -this.y - this.height / 2);
            
                ctx.beginPath();
            
            //ctx.rect(this.x, this.y, this.lenght, this.height);
                ctx.drawImage(cannonImage, this.x, this.y, this.lenght, this.height);
            }else{
                ctx.translate(this.x-40, this.y + this.height / 2);
            
                ctx.rotate(this.angle*Math.PI/180);
                
                ctx.translate(-this.x+40, -this.y - this.height / 2);
                
                ctx.beginPath();
                
                ctx.drawImage(cannonWorkImage, this.x, this.y, this.lenght, this.height);
            }
            //ctx.rotate(45*Math.PI/180);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            ctx.restore()
            
        }
        update() {
            this.drawCannon();
            if (this.angle > 80){
                angleVel = angleVel * -1
            }else if(this.angle < -80){
                angleVel = angleVel * -1
            }
            this.angle = this.angle + angleVel
        }
    }

    class Target {
        constructor(x, y, radius, color){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        }
    
        drawTarget(){
            //Specify to draw on screen
            ctx.beginPath();
            ctx.drawImage(targetImage, this.x-this.radius, this.y-this.radius, this.radius*2, this.radius*2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            this.drawTarget();
        }
    
    }

    class Projectile{
        constructor(x, y, radius, color, velocity){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        }
        drawProjectile(){
            //Specify to draw on screen
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        
    
        }
        update() {
            this.drawProjectile();
            if(startShot == true){
                this.x = this.x + this.velocity.x * 110;
                this.y = this.y + this.velocity.y * 110;
                startShot = false;
            }
            this.x = this.x + this.velocity.x * 10;
            this.y = this.y + this.velocity.y * 10;
            
        }
    }
    

    class Content{
        constructor(deltaX, y, radius, color, velocity, canvIndex){
            if(custom_key !== "work"){
                this.x = canvas.width / 2 + deltaX;
            }else{
                this.x = canvas.width / 2 - deltaX;
            }
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
            this.winkel = Math.asin(this.velocity.x/2*this.radius/180*Math.PI)
            this.canvIndex = canvIndex;
        }
        draw(){
            //Specify to draw on screen
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            this.draw();
            if(custom_key !== "work"){
                if(this.x > canvas.width / 32){
                    this.x = this.x - this.velocity.x;
                }else{
                    this.radius = canvas.width / 37;
                    canvas.nextSibling.style.visibility = "unset";
                    this.draw();
                    document.getElementById("click"+ (this.canvIndex + 1)).style.visibility = "unset";

                    let h3Tag1 = document.getElementById("content"+ (this.canvIndex + 1)).previousSibling.previousSibling.previousSibling;
                    let h3Tag2 = document.getElementById("content"+ (this.canvIndex + 1)).previousSibling.previousSibling;
                    
                    let cutContent;
                    let borders = 6 * 2 * 2;
                    let h3Tag1Height = h3Tag1.clientHeight;
                    let h3Tag2Height = h3Tag2.clientHeight;
                    if(h3Tag1.nodeName !== "H3"){
                        cutContent = h3Tag2Height * 2 + borders;
                    }else{
                        if(h3Tag1Height > h3Tag2Height){
                            cutContent = h3Tag1Height * 2 + borders;
                        }else{
                            cutContent = h3Tag2Height * 2 + borders;
                        }
                    }

                    document.getElementById("content"+ (this.canvIndex + 1)).style.maxHeight = (parseInt(document.getElementById("content"+ (this.canvIndex + 1)).style.maxHeight, 10) - cutContent) +  "px";
                    document.getElementById("content"+ (this.canvIndex + 1)).setAttribute("initmaxheight",(parseInt(document.getElementById("content"+ (this.canvIndex + 1)).style.maxHeight, 10)) +  "px");
                    window.cancelAnimationFrame(animationId);
                }
            }

            if(custom_key == "work"){
                if(this.x < canvas.width - canvas.width / 32){
                    this.x = this.x + this.velocity.x;
                }else{
                    this.radius = canvas.width / 37;
                    canvas.nextSibling.style.visibility = "unset";
                    this.draw();
                    document.getElementById("click"+ (this.canvIndex + 1)).style.visibility = "unset";

                    let h3Tag1 = document.getElementById("content"+ (this.canvIndex + 1)).previousSibling.previousSibling.previousSibling;
                    let h3Tag2 = document.getElementById("content"+ (this.canvIndex + 1)).previousSibling.previousSibling;
                    
                    let cutContent;
                    let borders = 6 * 2 * 2;
                    let h3Tag1Height = h3Tag1.clientHeight;
                    let h3Tag2Height = h3Tag2.clientHeight;
                    console.log(h3Tag1.nodeName)
                    if(h3Tag1.nodeName !== "H3"){
                        cutContent = h3Tag2Height * 2 + borders;
                    }else{
                        if(h3Tag1Height > h3Tag2Height){
                            cutContent = h3Tag1Height * 2 + borders;
                        }else{
                            cutContent = h3Tag2Height * 2 + borders;
                        }
                    }

                    document.getElementById("content"+ (this.canvIndex + 1)).style.maxHeight = (parseInt(document.getElementById("content"+ (this.canvIndex + 1)).style.maxHeight, 10) - cutContent) +  "px";
                    document.getElementById("content"+ (this.canvIndex + 1)).setAttribute("initmaxheight",(parseInt(document.getElementById("content"+ (this.canvIndex + 1)).style.maxHeight, 10)) +  "px");

                    window.cancelAnimationFrame(animationId);
                }
            }
            
        }
    }

    const x = canvas.width / 2;
    const y = canvas.height / 2;

    let braces = [];
    let target1 = new Target(canvas.width / 2 + canvas.width / 2.5, canvas.height / 2, 20, "white");
    let target2 = new Target(canvas.width / 2 - canvas.width / 2.5, canvas.height / 2, 20, "white");
    let cannon1 = new Cannon(-40, canvas.height / 2 - 17.5, 140, 35, "white", 0)
    let cannon2 = new Cannon(canvas.width + 40, canvas.height / 2 - 17.5, -140, 35, "white", 0)
    let content1 = new Content(canvas.width / 2.5, canvas.height / 2, 5, "white", {x:3,y:1}, canvasIndex)

    

    function restart(){
        localStorage.setItem('hit',"false");
        location.reload();
    }
    function addRestartButton(){
        let restartShooting = document.createElement('button');
        restartShooting.innerHTML = "Try to hit target again. (Clear)";
        restartShooting.addEventListener("click", restart, false);
        restartShooting.id = 'restartButton';
        document.body.append(restartShooting);
    }

    
    if(alreadyHit == 'true'){
        let restartShooting = document.createElement('button');
        restartShooting.innerHTML = "Try to hit target again. (Clear)";
        restartShooting.addEventListener("click", restart, false);
        restartShooting.id = 'restartButton';
        document.body.append(restartShooting);  
    }

    let animationId;
    function animate(){
        animationId = requestAnimationFrame(animate);
        if(hit !== true && alreadyHit !== 'true'){
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            if (custom_key !== "work"){
                cannon1.update();
                target1.update();
                projectiles.forEach(function(projectile, projectileIndex){
                    projectile.update();
                    if (projectile.x + projectile.radius < 0 ||
                        projectile.x - projectile.radius > canvas.width ||
                        projectile.y - + projectile.radius < 0||
                        projectile.y - projectile.radius > canvas.height){
                        setTimeout(function() {
                            projectiles.splice(projectileIndex, 1);
                        }, 0);
                    }
                });
                ctx.beginPath();
                ctx.drawImage(cannonWheelImage, 0-40, canvas.height/2 - 40, 80, 80);

                ctx.fillStyle = "red";
                ctx.fill();
                
                
                

            }else{
                cannon2.update();
                target2.update();
                projectiles.forEach(function(projectile, projectileIndex){
                    projectile.update();
                    if (projectile.x + projectile.radius < 0 ||
                        projectile.x - projectile.radius > canvas.width ||
                        projectile.y - + projectile.radius < 0||
                        projectile.y - projectile.radius > canvas.height){
                        setTimeout(function() {
                            projectiles.splice(projectileIndex, 1);
                        }, 0);
                    }
                });

                ctx.beginPath();
                ctx.drawImage(cannonWheelImage, canvas.width-40, canvas.height/2 - 40, 80, 80);
                ctx.fillStyle = "red";
                ctx.fill();

                
            }

            projectiles.forEach(function(projectile ,projectileIndex){
                if(custom_key !== "work"){
                const dist = Math.hypot(
                    projectile.x - target1.x,
                    projectile.y - target1.y
                    )
                    if (dist - target1.radius - projectile.radius < 1){              
                        projectiles.splice(projectileIndex, 1);
                        hit = true;
                        localStorage.setItem('hit','true');
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        drawBrace();
                    }
                }else{
                    const dist = Math.hypot(
                    projectile.x - target2.x,
                    projectile.y - target2.y
                    )
                if (dist - target2.radius - projectile.radius < 1){              
                    projectiles.splice(projectileIndex, 1);
                    hit = true;
                    localStorage.setItem('hit','true');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    drawBrace();
                }
                }
                    
                
            
            })

        }

        if(hit == false && alreadyHit == 'true'){
            drawBrace()
            }

        braces.forEach(function(brace, braceIndex){
            brace.update();
        
            if (brace.x + brace.radius < 0 ||
                brace.x - brace.radius > canvas.width ||
                brace.y - + brace.radius < 0||
                brace.y - brace.radius > canvas.height){
                setTimeout(function() {
                    braces.splice(braceIndex, 1);
                }, 0);
                //Start content draw
                contentDraw = true;
                if(document.getElementById('restartButton') === null){
                    addRestartButton();
                }
            }
        });
        if(contentDraw == true){
            content1.update();
        }
        

        
    }

    animate();


    document.addEventListener('click', function(event){
        if(custom_key !== "work"){
            startShot = true;
        const angle = Math.atan2(event.clientY - canvas.height / 2,
            event.clientX - canvas.width / 2
            );
        const velocity = {
            x: Math.cos(cannon1.angle*Math.PI/180),
            y: Math.sin(cannon1.angle*Math.PI/180)
        }
        projectiles.unshift(new Projectile(
            0,
            canvas.height / 2,
            10,
            'white',
            velocity
        ));
        }else{
            startShot = true;
            const angle = Math.atan2(event.clientY - canvas.height / 2,
                event.clientX - canvas.width / 2
                );
            const velocity = {
                x: Math.cos(cannon2.angle*Math.PI/180)*-1,
                y: Math.sin(cannon2.angle*Math.PI/180)*-1
            }
            projectiles.unshift(new Projectile(
                canvas.width,
                canvas.height / 2,
                10,
                'white',
                velocity
            ));
        }

    });


function drawBrace(){

    //print()
    if (custom_key !== "work"){
        braces.push(new Brace(
            canvas.width / 2 + canvas.width / 2.5,
            canvas.height / 2,
            5,
            'white',
            {
            x: 0, 
            y: 2
            }
        ));

    // curly bracket up
        braces.push(new Brace(
            canvas.width / 2 + canvas.width / 2.5,
            canvas.height / 2,
            5,
            'white',
            {
            x: 2,
            y: 2
            }
        ));
    }else{
        braces.push(new Brace(
            canvas.width / 2 - canvas.width / 2.5,
            canvas.height / 2,
            5,
            'white',
            {  
            x: 0,
            y: 2
            }
        ));
    
        // curly bracket up
        braces.push(new Brace(
            canvas.width / 2 - canvas.width / 2.5,
            canvas.height / 2,
            5,
            'white',
            {
            x: 2,
            y: 2
            }
        ));

    }

}



});
