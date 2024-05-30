/* Codigo creado por Cesar Emilio Garcia Gutierrez y Manuel Alcaraz Baltazar; publicado el dia 17 de Abril de 2024 a las 21:34 */
/* Codigo para calcular interpolacion lineal | 1er Orden */
function calculateLinearInterpolation() {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const f0 = parseFloat(document.getElementById("linear-f0").value);
  const f1 = parseFloat(document.getElementById("linear-f1").value);
  const x0 = parseFloat(document.getElementById("linear-x0").value);
  const x1 = parseFloat(document.getElementById("linear-x1").value);
  const xNew = parseFloat(document.getElementById("linear-x-new").value);
  const tValue = parseFloat(document.getElementById("trueValue").value);

  const fNew = linearInterpolation(xNew, x0, f0, x1, f1);
  document.getElementById(
    "linear-result"
  ).textContent = `El valor interpolado es: ${fNew.toFixed(6)}`;

  const errorVerdadero = calculateTrueError(tValue, fNew);
  document.getElementById(
    "true-error"
  ).textContent = `El error verdadero es: ${errorVerdadero.toFixed(6)}`;

  const errorPorcentual = calculatePercentError(tValue, fNew);
  document.getElementById(
    "porcentage-error"
  ).textContent = `El error porcentual es: ${errorPorcentual.toFixed(6)}%`;
}

function linearInterpolation(x, x0, f0, x1, f1) {
  return f0 + (x - x0) * ((f1 - f0) / (x1 - x0));
}

/* Codigo para calcular interpolacion cuadratica | 2da Orden */
function calculateQuadraticInterpolation() {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const f0 = parseFloat(document.getElementById("quadratic-f0").value);
  const f1 = parseFloat(document.getElementById("quadratic-f1").value);
  const f2 = parseFloat(document.getElementById("quadratic-f2").value);
  const x0 = parseFloat(document.getElementById("quadratic-x0").value);
  const x1 = parseFloat(document.getElementById("quadratic-x1").value);
  const x2 = parseFloat(document.getElementById("quadratic-x2").value);
  const xNew = parseFloat(document.getElementById("quadratic-x-new").value);

  const tValue = parseFloat(document.getElementById("trueValue").value);

  const fNew = quadraticInterpolation(xNew, x0, f0, x1, f1, x2, f2);
  document.getElementById(
    "quadratic-result"
  ).textContent = `El valor interpolado es: ${fNew.toFixed(6)}`;

  const errorVerdadero = calculateTrueError(tValue, fNew);
  document.getElementById(
    "true-error"
  ).textContent = `El error verdadero es: ${errorVerdadero.toFixed(6)}`;

  const errorPorcentual = calculatePercentError(tValue, fNew);
  document.getElementById(
    "porcentage-error"
  ).textContent = `El error porcentual es: ${errorPorcentual.toFixed(6)}%`;
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

  const f0 = parseFloat(document.getElementById("lagrange-f0").value);
  const f1 = parseFloat(document.getElementById("lagrange-f1").value);
  const x0 = parseFloat(document.getElementById("lagrange-x0").value);
  const x1 = parseFloat(document.getElementById("lagrange-x1").value);
  const xNew = parseFloat(document.getElementById("lagrange-x-new").value);
  const tValue = parseFloat(document.getElementById("trueValue").value);

  const fNew = lagrangeFirstOrderInterpolation(x0, x1, f0, f1, xNew);
  document.getElementById(
    "lagrange-first-order-result"
  ).textContent = `El valor interpolado es: ${fNew.toFixed(6)}`;

  const errorVerdadero = calculateTrueError(tValue, fNew);
  document.getElementById(
    "true-error"
  ).textContent = `El error verdadero es: ${errorVerdadero.toFixed(6)}`;

  const errorPorcentual = calculatePercentError(tValue, fNew);
  document.getElementById(
    "porcentage-error"
  ).textContent = `El error porcentual es: ${errorPorcentual.toFixed(6)}%`;
}

function lagrangeFirstOrderInterpolation(x0, x1, f0, f1, xNew) {
  return ((xNew - x1) / (x0 - x1)) * f0 + ((xNew - x0) / (x1 - x0)) * f1;
}

/* Codigo para calcular interpolacion de Lagrange 2da Orden */
function calculateLagrangeSecondOrderInterpolation() {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const f0 = parseFloat(document.getElementById("lagrange-f0").value);
  const f1 = parseFloat(document.getElementById("lagrange-f1").value);
  const f2 = parseFloat(document.getElementById("lagrange-f2").value);
  const x0 = parseFloat(document.getElementById("lagrange-x0").value);
  const x1 = parseFloat(document.getElementById("lagrange-x1").value);
  const x2 = parseFloat(document.getElementById("lagrange-x2").value);
  const xNew = parseFloat(document.getElementById("lagrange-x-new").value);
  const tValue = parseFloat(document.getElementById("trueValue").value);

  const fNew = lagrangeSecondOrderInterpolation(x0, x1, x2, f0, f1, f2, xNew);
  document.getElementById(
    "lagrange-second-order-result"
  ).textContent = `El valor interpolado es: ${fNew.toFixed(6)}`;

  const errorVerdadero = calculateTrueError(tValue, fNew);
  document.getElementById(
    "true-error"
  ).textContent = `El error verdadero es: ${errorVerdadero.toFixed(6)}`;

  const errorPorcentual = calculatePercentError(tValue, fNew);
  document.getElementById(
    "porcentage-error"
  ).textContent = `El error porcentual es: ${errorPorcentual.toFixed(6)}%`;
}

function lagrangeSecondOrderInterpolation(x0, x1, x2, f0, f1, f2, xNew) {
  const l0 = ((xNew - x1) * (xNew - x2)) / ((x0 - x1) * (x0 - x2));
  const l1 = ((xNew - x0) * (xNew - x2)) / ((x1 - x0) * (x1 - x2));
  const l2 = ((xNew - x0) * (xNew - x1)) / ((x2 - x0) * (x2 - x1));
  return l0 * f0 + l1 * f1 + l2 * f2;
}

function calculateTrueError(tValue, fNew) {
  return Math.abs(tValue - fNew);
}

function calculatePercentError(tValue, fNew) {
  const errorVerdadero = calculateTrueError(tValue, fNew);
  return Math.abs(errorVerdadero / tValue) * 100;
}
