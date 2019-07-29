const mainBoard = document.querySelector("#MainBoard");
const generateButton = document.querySelector("#generateButton")


const monster1 = new monster ("creepy-bob","images/creepybob.jpeg",{x: xpos() , y: ypos() })
const monster2 = new monster ("pickachu","images/picachu.jpg",{x: xpos(), y: ypos() })
const monster3 = new monster ("poo","images/poo.jpg",{x: xpos(), y: ypos() })
const monster4 = new monster ("twiity","images/twiiity.jpg",{x: xpos(),y: ypos()})
const monster5 = new monster ("shrek","images/shrek.jpg",{x: xpos(),y: ypos()})

generateButton.addEventListener("click",generateMonsters);
function generateMonsters(){
    draw(monsters)
}
const monsters = [];

monsters.push(monster1,monster2,monster3,monster4,monster5)

function draw(arr) {
    mainBoard.innerHTML = "";
    arr.forEach(function (monster) {
        monster.len()
        mainBoard.append(monster.getCard(130, 100))
    });
}

function xpos() {
  let x =  Math.round(Math.random() * 1100) + "px"
  return x
}

function ypos() {
    let y = Math.round(Math.random() * 320) + "px"
    return y
}

function monsterMoves () {
   let currentX = parseInt(this.style.left)
    let currentY = parseInt(this.style.top)
    this.style.opacity = "0.7"
    console.log(currentX, currentY)
    
    for (let monster in monsters) {
        if(monsters[monster].id === this.id){
            moves(monsters[monster],currentX,currentY)

        }
    }

}


function moves(monster,x,y){
    this.onkeydown = function(e) {
        console.log(x,y)
        switch (e.keyCode) {
            case 37:
            x = x - 5
                break;
            case 38:
            y = y - 5
                break;
            case 39:
                x = x + 5
                break;
            case 40:
                y =  y + 5
                break;
                
        }
        monster.setXpos(x)
        monster.setYpos(y)
        console.log(x)
        console.log(y)
        draw(monsters)

    
    };

}

for (let monster in monsters) {
 monsters[monster].__proto__.len = function len(){
  let  monsterkeys =  Object.keys(this)
  let result = monsterkeys.length
    console.log(monsterkeys,result)
 }
}




