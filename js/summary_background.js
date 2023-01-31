let alpha = 1;

//Background Filter

let newCanvas = document.createElement("canvas");
newCanvas.height = document.documentElement.scrollHeight;
newCanvas.setAttribute('style', "position:absolute;left:0;top:0;")
newCanvas.width  = window.innerWidth;
newCanvas.id = 'backgroundTransp';
document.querySelector('body').prepend(newCanvas);
canvas = document.getElementById('backgroundTransp');

ctx = canvas.getContext('2d');

alpha = 0.7;
ctx.globalAlpha = alpha;
ctx.fillStyle = "#1d1d1d";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.globalAlpha = 1;

//Neural Net

let newCanvasTag = document.createElement("canvas");
newCanvasTag.height = document.documentElement.scrollHeight;
newCanvasTag.setAttribute('style', "position:absolute;left:0;top:0;")
newCanvasTag.width  = window.innerWidth;
newCanvasTag.id = 'backgroundCanvas';
document.querySelector('body').prepend(newCanvasTag);

//Background

let newCanvas1 = document.createElement("canvas");
newCanvas1.height = document.documentElement.scrollHeight;
newCanvas1.setAttribute('style', "position:absolute;left:0;top:0;")
newCanvas1.width  = window.innerWidth;
newCanvas1.id = 'backgroundTransp';
document.querySelector('body').prepend(newCanvas1);
canvas = document.getElementById('backgroundTransp');

ctx = canvas.getContext('2d');

alpha = 0.7;
ctx.globalAlpha = alpha;
ctx.fillStyle = "1d1d1d";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.globalAlpha = 1;


canvas = document.getElementById('backgroundCanvas');

ctx = canvas.getContext('2d');

let links = [];
let nodesCollect = [];
let nodes = [];

class Node{
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.arc(this.x,this.y,this.radius, Math.PI * 180, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Connection{
    constructor(x1,y1,x2,y2,radius,color,vel){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.radius = radius;
        this.color = color;
        this.vel = vel;
    }
    draw(){
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
    update(){
        this.x1 = x1;
    }
}

let firstConnection = new Node(canvas.width/2, canvas.height, 5, "red");
nodes.push(firstConnection);
nodesCollect.push(nodes);

// let animationId;
// function animation(){
//     animationId = requestAnimationFrame(animation);
//     nodesCollect.forEach(funcion(element) {
//         let currentNodes = element;
//         currentNodes.forEach(funcion(element) {
//             let node = element;
//             node.draw();

//         });
//     });
// }
//animation();


    
//Background Time Line
for (let collIndex = 0; collIndex < nodesCollect.length; collIndex++) {
    let newNodes = [];

    if(nodesCollect.length < 8){

        nodesCollect[collIndex].forEach(function(element, nodesIndex){
            
            let singleNode = element;
            
            let newNode1 = new Node(singleNode.x + canvas.width / 2 * (0.5 - Math.random()) , 
            singleNode.y - canvas.height / 4 * Math.random(), 5, "white");
            let newNode2 = new Node(singleNode.x + canvas.width / 2 * (0.5 - Math.random()) , 
            singleNode.y - canvas.height / 4 * Math.random(), 5, "white");            

            newNodes.push(newNode1);
            newNodes.push(newNode2);
            
            let newConnection1 = new Connection(singleNode.x,singleNode.y,newNode1.x,newNode1.y,5,'blue',5);
            let newConnection2 = new Connection(singleNode.x,singleNode.y,newNode2.x,newNode2.y,5,'blue',5);
            let newConnection3 = new Connection(newNode1.x,newNode1.y,newNode2.x,newNode2.y,5,'blue',5);
            
            newNode1.draw();
            newNode2.draw();

            newConnection1.draw();
            newConnection2.draw();
            newConnection3.draw();
        });
    }   
    if(newNodes.length !== 0){
    nodesCollect.push(newNodes);
    }   
}



