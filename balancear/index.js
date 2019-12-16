'use strict'

const utils = require('./utils')

const balancear = (izquierda, derecha) => {
  return new Promise((resolve, reject) => {
    // Si no son validos tirar error
    if (!utils.numerosReales(izquierda) || !utils.numerosReales(derecha)) {
      reject(new Error('Argumentos no validos'))
    }

    // Ordena arreglos
    const nuevaIzquierda = utils.ordenaArreglo(izquierda)
    const nuevaDerecha = utils.ordenaArreglo(derecha)

    // Ningun peso
    const ningunPeso = utils.balanceCero(nuevaIzquierda)
    if (ningunPeso) resolve(ningunPeso)

    // Crear mapa
    const mapaPesos = utils.crearMapa(nuevaDerecha)

    // Un peso ordenado
    const pasaUnPeso = utils.balanceUnPeso(mapaPesos, nuevaIzquierda)
    if (pasaUnPeso) resolve([pasaUnPeso])

    // Dos pesos
    resolve(
      utils.balanceDosPesos(mapaPesos, nuevaIzquierda, nuevaDerecha)
    )
  })
}

module.exports = balancear
