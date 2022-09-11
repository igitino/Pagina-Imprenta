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

       
       
      return true

    }
 

    
    function submitForm() {
      let form = document.getElementById("myForm");
      form.submit();
  }


  
   //with this first line we're saying: "when the page loads (document is ready) run the following script"
   $(document).ready(function () {

    //select the POPUP FRAME and show it
    $("#popup").hide().fadeIn(1000);

    //close the POPUP if the button with id="close" is clicked
    $("#close").on("click", function (e) {
        e.preventDefault();
        $("#popup").fadeOut(1000);
    });

});
