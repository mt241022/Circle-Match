class FallingCircle {

    xPos;
    yPos;
    radius;
    farbe;
    richtung;
    speed;
    
    constructor(radius, farbe, richtung){
        this.el = document.createElement("div");

        this.el.style.position = "absolute";
        this.el.style.borderRadius = "50%";
        this.farbe = farbe;
        this.el.style.backgroundColor = this.farbe;
        this.el.style.boxShadow = "0 0 10px 5px" + this.farbe;

        this.radius = radius;
        this.el.style.width = this.radius * 2 + "px";
        this.el.style.height = this.radius * 2 + "px";

        this.speed = 20;
        this.isfalling = true;
        this.richtung = richtung;

        const centerX = window.innerWidth / 2 - this.radius;
        const centerY = window.innerHeight / 2 - this.radius;

        if (richtung == "top") {
            this.xPos = centerX;
            this.yPos = -this.radius * 2;
        } else if (richtung == "bottom") {
            this.xPos = centerX;
            this.yPos = window.innerHeight + this.radius * 2;
        } else if (richtung == "left") {
            this.xPos = -this.radius * 2;
            this.yPos = centerY;
        } else if (richtung == "right") {
            this.xPos = window.innerWidth + this.radius * 2;
            this.yPos = centerY;
        }

        this.el.style.left = this.xPos + "px";
        this.el.style.top = this.yPos + "px";

        document.body.appendChild(this.el);

    }

fallen(){

    if (this.isfalling) {
        if (this.richtung == "top") {
            this.yPos += this.speed;
        } else if (this.richtung == "bottom") {
            this.yPos -= this.speed;
        } else if (this.richtung == "left") {
            this.xPos += this.speed;
        } else if (this.richtung == "right") {
            this.xPos -= this.speed;
        }

        this.el.style.left = this.xPos + "px";
        this.el.style.top = this.yPos + "px";
    }
    else{
        return;
    }
}

stoppen(){
    this.isfalling = false;
}

}