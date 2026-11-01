// Validación de controles y campos del formulario de registro
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#form-registro");

  if (!formulario) return;

  formulario.addEventListener("submit", (evento) => {
    let formularioValido = true;

    // 1. Campo: Nombre completo
    const nombre = document.querySelector("#nombre");
    const errorNombre = document.querySelector("#error-nombre");
    if (nombre.value.trim().length < 3) {
      marcarInvalido(nombre, errorNombre, "El nombre completo debe tener al menos 3 caracteres.");
      formularioValido = false;
    } else {
      marcarValido(nombre, errorNombre);
    }

    // 2. Campo: Correo electrónico (formato regex)
    const correo = document.querySelector("#correo");
    const errorCorreo = document.querySelector("#error-correo");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo.value.trim())) {
      marcarInvalido(correo, errorCorreo, "Ingresa un correo electrónico con formato válido (ejemplo: usuario@correo.com).");
      formularioValido = false;
    } else {
      marcarValido(correo, errorCorreo);
    }

    // 3. Campo: Contraseña (mínimo 6 caracteres)
    const password = document.querySelector("#password");
    const errorPassword = document.querySelector("#error-password");
    if (password.value.length < 6) {
      marcarInvalido(password, errorPassword, "La contraseña debe tener un mínimo de 6 caracteres.");
      formularioValido = false;
    } else {
      marcarValido(password, errorPassword);
    }

    // 4. Control: Selector de Rol (Comprador o Vendedor)
    const rol = document.querySelector("#rol");
    const errorRol = document.querySelector("#error-rol");
    if (!rol.value) {
      marcarInvalido(rol, errorRol, "Selecciona qué tipo de cuenta deseas crear.");
      formularioValido = false;
    } else {
      marcarValido(rol, errorRol);
    }

    // 5. Control: Casilla de verificación de Términos y Condiciones
    const terminos = document.querySelector("#terminos");
    const errorTerminos = document.querySelector("#error-terminos");
    if (!terminos.checked) {
      marcarInvalido(terminos, errorTerminos, "Debes aceptar los términos y condiciones de InterShop.");
      formularioValido = false;
    } else {
      marcarValido(terminos, errorTerminos);
    }

    // Si hubo errores, detenemos el envío tradicional
    if (!formularioValido) {
      evento.preventDefault();
    } else {
      evento.preventDefault(); // Evitamos recargar la página para la demo
      alert("¡Registro completado exitosamente! Los datos han sido validados correctamente.");
      formulario.reset();
      limpiarEstilosFormulario(formulario);
    }
  });

  function marcarInvalido(input, elementoError, mensaje) {
    elementoError.textContent = mensaje;
    input.classList.remove("input-valido");
    input.classList.add("input-invalido");
  }

  function marcarValido(input, elementoError) {
    elementoError.textContent = "";
    input.classList.remove("input-invalido");
    input.classList.add("input-valido");
  }

  function limpiarEstilosFormulario(form) {
    const inputs = form.querySelectorAll(".form-control, .form-select, .form-check-input");
    inputs.forEach((el) => {
      el.classList.remove("input-valido", "input-invalido");
    });
  }
});