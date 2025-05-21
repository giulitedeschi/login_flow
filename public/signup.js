///Le password matchano
var password = document.getElementById("password"),
confirm_password = document.getElementById("confirm_password")
var form = document.getElementById("registra")
//console.log(form)

form.addEventListener("submit",(event)=> {
  console.log("ciao")
  if(password.value != confirm_password.value) {
    event.preventDefault()
    confirm_password.setCustomValidity("Le password non corrispondono.");
  } else {
    confirm_password.setCustomValidity('');
    //window.location.href="/login"
  }
})


/*function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}*/
