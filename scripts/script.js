 let myImage = document.querySelector("#myImage");
let myButton= document.querySelector ("#myButton");
let myHeading = document.querySelector ("#user-name");
let movimiento= document.querySelector ("#movimiento");

//Cambiar imagen al clicar
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://vectorfreefiles.com/media/thumb/fit/501x353/62288acbd3c5b.jpg') {
    myImage.setAttribute ('src','https://www.shutterstock.com/image-vector/cartoon-world-globe-stand-3d-600nw-2280329667.jpg');
  } else {
    myImage.setAttribute ('src','https://vectorfreefiles.com/media/thumb/fit/501x353/62288acbd3c5b.jpg');
  }
};

//Pedir al usuario su nombre
function setUserName() {
  let myName = prompt('Por favor, ingrese su nombre.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Alrededor del mundo,'+ myName;
  }
}

if (!localStorage.getItem('name')){
  setUserName();
}else {
  let storedName= localStorage.getItem ('name');
  myHeading.innerHTML= 'Alrededor del mundo'+ storedName;
}

myButton.onclick = function (){
  setUserName();
}


//animacion del avion
let posX= 0;
let posY= 0;

function moverObjeto(){
  if(posX< window.innerWidth - 50 && posY===0){
    posX+=5;
  } else if ( posX >= window.innerWidth - 50 && posY <window.innerHeight - 50) {
    posY +=5;
  } else {
    posX= 0;
    posY = 0;
  }
    movimiento.style.transform = "translate(${posX}px, ${posY}px)";
   requestAnimationFrame (moverObjeto);
}

moverObjeto();
