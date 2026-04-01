class BaseCircle {

    xPos;
    yPos;
    radius;
    farbe;
    
    constructor(radius, farbe){
        this.el = document.createElement("div");

        this.el.style.position = "absolute";
        this.el.style.borderRadius = "50%";
        this.farbe = farbe;
        this.el.style.backgroundColor = this.farbe;
        this.el.style.boxShadow = "0 0 10px 5px" + this.farbe;

        this.radius = radius;
        this.el.style.width = this.radius * 2 + "px";
        this.el.style.height = this.radius * 2 + "px";

        this.xPos = window.innerWidth / 2 - this.radius;
        this.yPos = window.innerHeight / 2 - this.radius;

        this.el.style.left = this.xPos + "px";
        this.el.style.top = this.yPos + "px";

        document.body.appendChild(this.el);
    }
}