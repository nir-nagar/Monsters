class monster {

    constructor (name,imageUrl, pos) {
        this.id = `monster_${Math.round(Math.random() * 999)}`;
        this.name = name;
        this.imageUrl = imageUrl
        this.x = pos.x
        this.y = pos.y
 
    }
    setXpos(Xposition) {
        console.log("this x position" + Xposition)
        this.x =  Xposition + "px"
    }
    setYpos(Yposition)  {
        console.log ("this y position" +  Yposition)
        this.y =  Yposition + "px"
    }

    getCard(w, h) {
        const monsterUI = document.createElement("div");
        const img = document.createElement("img");
        img.src = this.imageUrl
        img.height = w;
        img.width = h;
        monsterUI.append(img)
        monsterUI.style.position = "absolute"
        monsterUI.style.left = this.x
        monsterUI.style.top = this.y
        monsterUI.id = this.id
        monsterUI.addEventListener("click",monsterMoves)
        return monsterUI;
    }

}

