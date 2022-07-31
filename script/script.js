
let images = ["photo/bolsas-plasticas.jpg", "photo/slider-jumbo-3.jpg", "photo/cinta.png"];


let index = 0;
const imgElement = document.getElementById("plasticos");

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 2500);
};

/* plasticoss /////////////////////////////////*/////////////





function validateForm() {
  let username = document.forms["myForm"]["nombre"];
 
  if (username.value == "") {
    alert("Please enter your name.");
    username.focus();
    return false;

  }
return true
}





/*
  /*const myForm = document.getElementById("#myForm");
  const nombre = document.getElementById("nombre");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");
  const psw = document.getElementById("psw");
  const pswrepeat = document.getElementById("pswrepeat");
  const errorElement = document.getElementById("error");


  form.addEventListener('submit', (e) => {
   
    let messages = [];
    
    if (nombre.value === " " || nombre.value == null) {
      messages.push("Por favor ingresa tu nombre")
    }
    if (telefono.value === " " || telefono.value == null) {
      messages.push("Por favor ingresa tu telefono")
    }

    if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText= messages.join(" , ")
     } 
   
    })*/
