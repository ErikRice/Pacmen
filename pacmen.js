// let position = 0;
// let direction = 0;
// const pacArray = [
//     ['PacMan1.png', 'PacMan2.png'],
//     ['PacMan3.png', 'PacMan4.png']
// ];

let pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale,
    };
}
// Factory to make a PacMan at a random position with random velocity

function makePac() {
    
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);
   
    
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = 'Images/PacMan1.png';
    newimg.width = 100;
    newimg.style.top = position.y;
    newimg.style.left = position.x;
    


    // add new Child image to game
    game.appendChild(newimg);
   
    // return details in an object
    return {
        position,
        velocity,
        newimg,
    };
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item);
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;
        console.log(item);

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    });
    setTimeout(update, 20);
}

function checkCollisions(item) {
   let posX = item.position.x;
   let posY = item.position.y;

   if (posX <= 0 || (posX + item.newimg.width) >= window.innerWidth){
       item.velocity.x *= -1; 
   };
   if (posY <= 0 || (posY + item.newimg.height) >= window.innerHeight){
       item.velocity.y *= -1;
   };
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
    console.log(pacMen);
}