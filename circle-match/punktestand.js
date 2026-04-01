class Punktestand{

    el;
    wert;

    constructor(id) {
        this.el = document.getElementById(id);
        this.wert = 0;

    }

    anzeigen(){
        this.el.innerText = "Punkte: " + this.wert;
    }

    erhöhen() {
        this.wert++;
        this.anzeigen();
    }

    abziehen(){
        this.wert -= 1;
        this.anzeigen();
    }

    zurücksetzen() {
        this.wert = 0;
        this.anzeigen();
    }
    

}