const form = document.querySelector(".form_contact")
const mascaraForm = document.querySelector(".mascara_form")


function clickInButtonContact () {
  form.style.left = "50%"
  form.style.transition = "1s"
  form.style.transform = "translateX(-50%)"
  mascaraForm.style.visibility = "visible"
}

mascaraForm.addEventListener("click", () => {
  mascaraForm.style.visibility = "hidden"
  form.style.left = "-20%"
  form.style.transition = "1s"
  form.style.transform = "translateX(0)"
})


