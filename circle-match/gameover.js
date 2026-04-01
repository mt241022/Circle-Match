class GameOverScreen{

    constructor(){

        this.el = document.getElementById("gameover");
        this.text = document.getElementById("punktestand-anzeigen");
        this.highscoreText = document.getElementById("highscore-anzeigen");
        this.button = document.getElementById("neustart-button");
        
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
        this.el.style.display = "none"; 

        this.button.addEventListener("click", function(){
            this.verstecken();
            neustart();
        }.bind(this))
        
        document.body.appendChild(this.el);
    }

    anzeigen(punktestand) {

        let gespeichertePunkte = Number(localStorage.getItem("highscore")); 
        let highscore;

        if (isNaN(gespeichertePunkte)){
        highscore = 0;
        } else {
        highscore = gespeichertePunkte;
        }

        if (punktestand > highscore) {
            localStorage.setItem("highscore", punktestand);
            highscore = punktestand;
        }


        this.text.innerText = "Du hast " + punktestand + " Punkte erreicht!";
        this.highscoreText.innerText = "Dein Highscore: " + highscore;
        
        this.el.style.display = "flex";
        }

    verstecken() {
            this.el.style.display = "none";
        }
    }