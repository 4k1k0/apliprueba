'use strict'

const diferencia = (arreglo) => {
  const [izquierda, derecha] = arreglo
  if (izquierda === derecha) return 0
  return izquierda > derecha ? izquierda - derecha : derecha - izquierda
}

module.exports = diferencia
