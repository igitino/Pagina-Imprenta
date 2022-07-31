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



function validateForm() {
    let nombre = document.forms["myForm"]["nombre"];
    let telefono = document.forms["myForm"]["telefono"];
    let email = document.forms["myForm"]["email"];
    let psw = document.forms["myForm"]["psw"];
    let pswrepeat = document.forms["myForm"]["pswrepeat"];
   
    if (nombre.value == "" || nombre.value == null) {
      alert("Por favor ingrese su nombre completo");
      nombre.focus();
      return false;
  
    }

    if (telefono.value == "") {
        alert("Por favor ingresa tu n° telefonico");
        telefono.focus();
        return false;
    
      }

      if (email.value.indexOf("@", 0) < 0) {
        alert("Por favor ingresa tu dirección de e-mail");
        telefono.focus();
        return false;
    
      }

        
      if(psw == " " || pswValor.length < 8){
        alert("Debe tener al menos 8 digitos");
        psw.focus();
     return false;
      }
       
      
      if (pswrepeat !== psw){
          alert("Por favor Reescriba el password")
          pswrepeat.focus();
          return false;
      }

      return true

    }
 

    
