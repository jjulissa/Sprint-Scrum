const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir el envío del formulario

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    errorMessage.textContent = "Por favor, completa todos los campos.";
    return;
  }

  // Aquí puedes agregar la lógica de autenticación
  errorMessage.textContent = "";
  alert("Inicio de sesión exitoso (simulado)");
});
