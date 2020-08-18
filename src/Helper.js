//get diferencia de años
export function obtenerDiferenciaAños(year) {
  return new Date().getFullYear() - year;
}

//get total a pagar segun marca
export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

//calcula el tipo de plan
export function obtenerPlan(plan) {
  return plan === 'basico' ? 1.2 : 1.5;
}

//primer letra uppercase
export function letraCapital(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
