let myImage = document.querySelector('img');
let imagen = document.getElementById ("imagen");
let contenedor = document.getElementById ("contenedor");
let MaxWidth = contenedor.offsetWidth;
let imagenWidth = imagen.offsetWidth;
let posX = MaxWidth;

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://vectorfreefiles.com/media/thumb/fit/501x353/62288acbd3c5b.jpg') {
    myImage.setAttribute ('src','https://www.shutterstock.com/image-vector/cartoon-world-globe-stand-3d-600nw-2280329667.jpg');
  } else {
    myImage.setAttribute ('src','https://vectorfreefiles.com/media/thumb/fit/501x353/62288acbd3c5b.jpg');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
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

myButton.onclick= function (){
  setUserName ();
  }

 function moverImagen() {
         if (posX + imagenWidth > 0) {
                posX -= 2; 
                imagen.style.left = posX + 'px';
                requestAnimationFrame(moverImagen);
            } else {
                posX = maxWidth; 
                moverImagen(); 
         }
        }

        moverImagen();
