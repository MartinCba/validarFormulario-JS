document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  //Validar campo nombre
  let entradaNombre = document.getElementById("name");
  let errorNombre = document.getElementById("nameError");

  if (entradaNombre.value.length === 0) {
    errorNombre.textContent = "El campo nombre es obligatorio";
    errorNombre.classList.add("error-message");
  } else {
    errorNombre.textContent = "";
    errorNombre.classList.remove("error-message");
  }

  //Validar campo email
  let entradaEmail = document.getElementById("email");
  let errorEmail = document.getElementById("emailError");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(entradaEmail.value)) {
    errorEmail.textContent = "El campo email es obligatorio";
    errorEmail.classList.add("error-message");
  } else {
    errorEmail.textContent = "";
    errorEmail.classList.remove("error-message");
  }

  //Validar campo contraseña
  let entradaContrasenia = document.getElementById("password");
  let errorContrasenia = document.getElementById("passwordError");

  if (entradaContrasenia.value.length < 8) {
    errorContrasenia.textContent = "Minimo 8 caracteres en este campo.";
    errorContrasenia.classList.add("error-message");
  } else {
    errorContrasenia.textContent = "";
    errorContrasenia.classList.remove("error-message");
  }

  //Si todos los campos son validos, enviar formulario
  if (
    !errorNombre.textContent &&
    !errorEmail.textContent &&
    !errorContrasenia.textContent
  ) {
    alert("Formulario enviado con exito");
    document.getElementById("formulario").submit();
  }
});
