// Calculadora funcional de cotización y presupuesto
document.addEventListener("DOMContentLoaded", () => {
  const precioInput = document.querySelector("#calc-precio");
  const cantidadInput = document.querySelector("#calc-cantidad");
  const envioInput = document.querySelector("#calc-envio");
  const resultado = document.querySelector("#calc-total");
  const btnCalcular = document.querySelector("#btn-calcular");
  const btnLimpiar = document.querySelector("#btn-limpiar-calc");

  // Función principal para realizar el cálculo
  function calcularPresupuesto() {
    const precio = parseFloat(precioInput.value);
    const cantidad = parseInt(cantidadInput.value, 10);
    const envio = parseFloat(envioInput.value) || 0;

    if (isNaN(precio) || precio <= 0) {
      resultado.textContent = "Ingresa un precio válido mayor a 0.";
      resultado.className = "text-danger fw-bold";
      precioInput.focus();
      return;
    }

    if (isNaN(cantidad) || cantidad <= 0) {
      resultado.textContent = "La cantidad debe ser al menos 1.";
      resultado.className = "text-danger fw-bold";
      cantidadInput.focus();
      return;
    }

    if (envio < 0) {
      resultado.textContent = "El costo de envío no puede ser negativo.";
      resultado.className = "text-danger fw-bold";
      envioInput.focus();
      return;
    }

    const total = (precio * cantidad) + envio;
    resultado.textContent = `$${total.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`;
    resultado.className = "text-success fw-bold";
  }

  // 1. Detectar si venimos desde el catálogo con un precio preseleccionado
  const parametrosURL = new URLSearchParams(window.location.search);
  const precioDesdeURL = parametrosURL.get("precio");

  if (precioDesdeURL && precioInput) {
    precioInput.value = precioDesdeURL;
    precioInput.classList.add("input-valido");
    // Ejecuta el cálculo de inmediato para mostrar el total al usuario
    calcularPresupuesto();
  }

  // 2. Evento del botón Calcular
  if (btnCalcular) {
    btnCalcular.addEventListener("click", calcularPresupuesto);
  }

  // 3. Evento del botón Limpiar
  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", () => {
      precioInput.value = "";
      precioInput.classList.remove("input-valido", "input-invalido");
      cantidadInput.value = "1";
      envioInput.value = "0";
      resultado.textContent = "$0.00 MXN";
      resultado.className = "text-dark fw-bold";
    });
  }
});