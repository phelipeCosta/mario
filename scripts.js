const form = document.querySelector(".formulario-fale-conosco")
const mascara =document.querySelector(".mascara-formulario")

function mostrarform() {
   form.style.left = "50%"
   form.style.transform = "translatex(-50%)"
   mascara.style.visibility = "visible"
  
}

function clik() {
   form.style.left = "50%"
   form.style.transform = "translatex(-50%)"
   mascara.style.visibility = "visible"

}

function esconderform() {

   form.style.left = "-311px"
   mascara.style.visibility="hidden"

}