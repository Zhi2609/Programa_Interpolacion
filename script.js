/* Codigo creado por Cesar Emilio Garcia Gutierrez y Manuel Alcaraz Baltazar; publicado el dia 17 de Abril de 2024 a las 21:34 */
/* Codigo para calcular interpolacion lineal | 1er Orden */
function calculateLinearInterpolation() {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const f0 = parseFloat(document.getElementById("linear-f0").value); // Obtiene los valores ingresados en el HTML
  const f1 = parseFloat(document.getElementById("linear-f1").value); // Obtiene los valores ingresados en el HTML
  const x0 = parseFloat(document.getElementById("linear-x0").value); // Obtiene los valores ingresados en el HTML
  const x1 = parseFloat(document.getElementById("linear-x1").value); // Obtiene los valores ingresados en el HTML
  const xNew = parseFloat(document.getElementById("linear-x-new").value); // Obtiene los valores ingresados en el HTML

  const fNew = linearInterpolation(xNew, x0, f0, x1, f1);
  document.getElementById(
    "linear-result"
  ).textContent = `El valor interpolado es: ${fNew}`;
}

function linearInterpolation(x, x0, f0, x1, f1) {
  return f0 + (x - x0) * ((f1 - f0) / (x1 - x0));
}

/* Codigo para calcular interpolacion cuadratica | 2da Orden */
function calculateQuadraticInterpolation() {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const f0 = parseFloat(document.getElementById("quadratic-f0").value); // Obtiene los valores ingresados en el HTML
  const f1 = parseFloat(document.getElementById("quadratic-f1").value); // Obtiene los valores ingresados en el HTML
  const f2 = parseFloat(document.getElementById("quadratic-f2").value); // Obtiene los valores ingresados en el HTML
  const x0 = parseFloat(document.getElementById("quadratic-x0").value); // Obtiene los valores ingresados en el HTML
  const x1 = parseFloat(document.getElementById("quadratic-x1").value); // Obtiene los valores ingresados en el HTML
  const x2 = parseFloat(document.getElementById("quadratic-x2").value); // Obtiene los valores ingresados en el HTML
  const xNew = parseFloat(document.getElementById("quadratic-x-new").value); // Obtiene los valores ingresados en el HTML

  const fNew = quadraticInterpolation(xNew, x0, f0, x1, f1, x2, f2);
  document.getElementById(
    "quadratic-result"
  ).textContent = `El valor interpolado es: ${fNew}`;
}

function quadraticInterpolation(x, x0, f0, x1, f1, x2, f2) {
  const a = ((f2 - f1) / (x2 - x1) - (f1 - f0) / (x1 - x0)) / (x2 - x0);
  const b = (f1 - f0) / (x1 - x0) - a * (x0 + x1);
  const c = f0 - a * x0 * x0 - b * x0;
  return a * x * x + b * x + c;
}

/* Codigo para calcular interpolacion de Lagrange 1ra Orden */
function calculateLagrangeFirstOrderInterpolation() {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const f0 = parseFloat(document.getElementById("lagrange-f0").value); // Obtiene los valores ingresados en el HTML
  const f1 = parseFloat(document.getElementById("lagrange-f1").value); // Obtiene los valores ingresados en el HTML
  const x0 = parseFloat(document.getElementById("lagrange-x0").value); // Obtiene los valores ingresados en el HTML
  const x1 = parseFloat(document.getElementById("lagrange-x1").value); // Obtiene los valores ingresados en el HTML
  const xNew = parseFloat(document.getElementById("lagrange-x-new").value); // Obtiene los valores ingresados en el HTML

  const fNew = lagrangeFirstOrderInterpolation([x0, x1], [f0, f1], xNew);
  document.getElementById(
    "lagrange-first-order-result"
  ).textContent = `El valor interpolado es: ${fNew}`;
}

function lagrangeFirstOrderInterpolation(x0, x1, f0, f1, xNew) {
  return (((xNew - x1) / (x0 - x1)) (f0) + ((xNew - x0) / (x1 - x0)) (f1));
}

/* Codigo para calcular interpolacion de Lagrange 2da Orden */
/* function calculateLagrangeSecondOrderInterpolation() {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const f0 = parseFloat(document.getElementById("lagrange-f0").value); // Obtiene los valores ingresados en el HTML
  const f1 = parseFloat(document.getElementById("lagrange-f1").value); // Obtiene los valores ingresados en el HTML
  const f2 = parseFloat(document.getElementById("lagrange-f2").value); // Obtiene los valores ingresados en el HTML
  const x0 = parseFloat(document.getElementById("lagrange-x0").value); // Obtiene los valores ingresados en el HTML
  const x1 = parseFloat(document.getElementById("lagrange-x1").value); // Obtiene los valores ingresados en el HTML
  const x2 = parseFloat(document.getElementById("lagrange-x2").value); // Obtiene los valores ingresados en el HTML
  const xNew = parseFloat(document.getElementById("lagrange-x-new").value); // Obtiene los valores ingresados en el HTML

  const fNew = lagrangeSecondOrderInterpolation(
    [x0, x1, x2],
    [f0, f1, f2],
    xNew
  );
  document.getElementById(
    "lagrange-second-order-result"
  ).textContent = `El valor interpolado es: ${fNew}`;
}

function lagrangeSecondOrderInterpolation(x, f, xNew) {
  // Error reparable
} */
