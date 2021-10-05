
function changeRedtoYellow () {
    let elementRed = document.getElementById("red");
    elementRed.classList.remove("active");
    let elementYellow = document.getElementById("yellow");
    elementYellow.classList.add("active");
    setTimeout(changeYelowtoGreen, 3000);
}

function changeYelowtoGreen () {
    let elementYellow = document.getElementById("yellow");
    elementYellow.classList.remove("active");
    let elementGreen = document.getElementById("green");
    elementGreen.classList.add("active");
    setTimeout(changeGreentoRed, 3000);
} 

function changeGreentoRed () {
    let elementGreen = document.getElementById("green");
    elementGreen.classList.remove("active");
    let elementRed = document.getElementById("red");
    elementRed.classList.add("active");
    setTimeout(changeRedtoYellow, 3000);
} 
changeRedtoYellow();

function moveCarWhenGreen () {
    let Bluecar = document.getElementById("blue");
    let elementGreen = document.getElementById("green");
    if (elementGreen.className === "circle active") { 
        moveCar();
    }
}
setInterval(moveCarWhenGreen, 1000);

function moveCar () {
    let Bluecar = document.getElementById("blue");
    let newPosition = parseInt(Bluecar.style.left);
    newPosition += 5;
    newPosition += "px";
    Bluecar.style.left = newPosition;
}
moveCar()

