'use strict'

const diferencia = require('./diferencia')

// Retorna dif en caso de que se encuentre en el mapa
// Caso contrario retorna false
const balanceUnPeso = (mapa, pesos) => {
  const dif = diferencia(pesos)
  return mapa.has(dif) && dif
}

module.exports = balanceUnPeso
