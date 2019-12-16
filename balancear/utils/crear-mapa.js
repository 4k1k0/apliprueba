'use strict'

const crearMapa = (arreglo) => {
  const mapa = new Map()
  arreglo.forEach(e => {
    if (!mapa.has(e)) mapa.set(e, 0)
    mapa.set(e, mapa.get(e) + 1)
  })
  return mapa
}

module.exports = crearMapa
