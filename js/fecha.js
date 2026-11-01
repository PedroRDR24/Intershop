// Obtiene y muestra dinámicamente la fecha actual en español
document.addEventListener("DOMContentLoaded", () => {
  const elementoFecha = document.querySelector("#fecha-actual");

  if (elementoFecha) {
    const ahora = new Date();
    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    const fechaFormateada = ahora.toLocaleDateString("es-MX", opciones);
    // Poner en mayúscula la primera letra del día
    elementoFecha.textContent = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
  }
});