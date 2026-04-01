let baseCircle;
let fallingCircle;
let punkte;
let gameOver;
let startgame;
const farben = ["#FF13F0", "#39FF14"];
const richtungen = ["top", "bottom", "left", "right"];


function setup() {

    baseCircle = new BaseCircle(130, Zufallsfarbe());

    erstelleCircle();

    punkte = new Punktestand("punktestand");
    punkte.anzeigen();

    gameOver = new GameOverScreen();

    setInterval(loop, 20);
}

window.onload = function(){
    startgame = new StartGame();
}

function Zufallsfarbe() {
    const index = Math.floor(Math.random() * farben.length);
    return farben[index];
}

function Zufallsrichtung() {
    const index = Math.floor(Math.random() * richtungen.length);
    return richtungen[index];
}


// Fallenden Circle erstellen
function erstelleCircle(){
    fallingCircle = new FallingCircle(baseCircle.radius, Zufallsfarbe(), Zufallsrichtung());
}

// Fallenden Kreis stoppen
document.addEventListener("keydown", function(event){
    if(event.code == "Space"){
        event.preventDefault(); // verhindert Scrollen
        stoppeCircle();
    }
});



// Kreis stoppen, Überschneidung und Farbe prüfen, neuen Kreis erstellen
function stoppeCircle() {
    
    fallingCircle.stoppen();

    // Überschneidung berechnen
    const distanzX = (fallingCircle.xPos + fallingCircle.radius) - (baseCircle.xPos + baseCircle.radius); // horizontaler Abstand der Mittelpunkte
    const distanzY = (fallingCircle.yPos + fallingCircle.radius) - (baseCircle.yPos + baseCircle.radius); // vertikaler Abstand der Mittelpunkte
    let abstand;
    if (distanzY == 0){ // Kreis bewegt sich horizontal
        abstand = Math.abs(distanzX);
    } else {
        abstand = Math.abs(distanzY);
    }

    const sumRadius = fallingCircle.radius + baseCircle.radius;

    // wenn keine Überschneidung vorhanden
    if (abstand > sumRadius) {
        fallingCircle.el.remove();
        gameOver.anzeigen(punkte.wert);
        return;
    }

    // neuen Radius berechnen
    const overlap = sumRadius - abstand; // wie stark sich die Kreise überschneiden
    const neuerRadius = overlap / 2;

    // Farbe überprüfen
    if (fallingCircle.farbe == baseCircle.farbe){
        punkte.erhöhen();
    } else {
        punkte.abziehen();
        if (punkte.wert < 1) {
            punkte.zurücksetzen();
        }
        punkte.anzeigen();
    }

    // alte Kreise entfernen
    fallingCircle.el.remove();
    baseCircle.el.remove();

    // neuen BaseCircle mit neuem Radius erstellen
    baseCircle = new BaseCircle(neuerRadius, Zufallsfarbe());

    // neuen FallingCircle mit neuem Radius erstellen
    erstelleCircle();

}


function istAusserhalb() {
    if (fallingCircle.richtung == "top") {
        return fallingCircle.yPos > window.innerHeight; // verlässt unten den Bildschirm
    }
    if (fallingCircle.richtung == "bottom") {
        return fallingCircle.yPos < -fallingCircle.radius * 2;
    }
    if (fallingCircle.richtung == "left") {
        return fallingCircle.xPos > window.innerWidth;
    }
    if (fallingCircle.richtung == "right") {
        return fallingCircle.xPos < -fallingCircle.radius * 2;
    }
    return false;
}


function loop() {

    fallingCircle.fallen();

    // wenn der Kreis den Bildschirm verlassen hat, wird er entfernt
    if (istAusserhalb()){

        if(fallingCircle.farbe == baseCircle.farbe){ // GameOver, weil keine Überschneidung
            gameOver.anzeigen(punkte.wert);
            return;
        }

        fallingCircle.el.remove();
        erstelleCircle(); 
    }
}


// Neustart-Funktion
function neustart() {
    punkte.zurücksetzen();
    gameOver.verstecken();
    
    fallingCircle.el.remove();
    baseCircle.el.remove();

    baseCircle = new BaseCircle(130, Zufallsfarbe());
    erstelleCircle();
}