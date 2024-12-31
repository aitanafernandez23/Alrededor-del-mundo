document.addEventListener('DOMContentLoaded', function () {
let imagenAvion = document.getElementById("imagen-avion");
let imagenGrande = document.getElementById("imagen-grande");
imagenGrande.onclick = function () {
let mySrc = imagenGrande.getAttribute('src');
if (mySrc === 'https://vectorfreefiles.com/media/thumb/fit/501x353/62288acbd3c5b.jpg') {

imagenGrande.setAttribute('src', 'https://www.shutterstock.com/image-vector/cartoon-
world-globe-stand-3d-600nw-2280329667.jpg');

} else {
imagenGrande.setAttribute('src',
'https://vectorfreefiles.com/media/thumb/fit/501x353/62288acbd3c5b.jpg');
}
};
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
let myName = prompt('Por favor, introduce tu nombre.');
if (myName && myName !== "") {
localStorage.setItem('name', myName);
myHeading.innerHTML = 'Alrededor del mundo, ' + myName;
}
}
if (!localStorage.getItem('name')) {
setUserName();
} else {

let storedName = localStorage.getItem('name');
myHeading.innerHTML = 'Alrededor del mundo, ' + storedName;
}
myButton.onclick = function () {
setUserName();
};
let posX = 0;
let maxWidth = window.innerWidth;
let speed = 2;
let direction = 1;
function moverAvion() {
posX += speed * direction;
if (posX >= maxWidth - 50 || posX <= 0) {
direction *= -1;
}
imagenAvion.style.left = posX + 'px';
requestAnimationFrame(moverAvion);
}
moverAvion();
});
