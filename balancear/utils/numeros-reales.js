'use strict'

const numerosReales = (arreglo) => {
  if (!Array.isArray(arreglo)) return false
  for (let index = 0; index < arreglo.length; index++) {
    if (typeof arreglo[index] !== 'number') return false
  }
  return true
}

module.exports = numerosReales
