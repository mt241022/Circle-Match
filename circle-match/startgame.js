class StartGame {

    constructor() {

        this.el = document.getElementById("startgame");
        this.button = document.getElementById("start-button");

        this.el.style.position = "fixed";
        this.el.style.position = "fixed";
        this.el.style.top = "0";
        this.el.style.left = "0";
        this.el.style.width = "100%";
        this.el.style.height = "100%";
        this.el.style.backgroundColor = "#000000";
        this.el.style.display = "flex";
        this.el.style.flexDirection = "column";
        this.el.style.justifyContent = "center";
        this.el.style.alignItems = "center";
        this.el.style.color = "white";
        this.el.style.fontSize = "2em";
        this.el.style.zIndex = "1000";

        this.button.addEventListener("click", function() {
            this.verstecken();
            setup();
        }.bind(this))

        document.body.appendChild(this.el);
    }

    verstecken() {
        this.el.style.display = "none";
    }

}