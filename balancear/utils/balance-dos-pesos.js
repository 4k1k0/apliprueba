'use strict'

const balanceDosPesos = (mapa, izquierda, derecha) => {
  let answer = []

  derecha.forEach((peso, index) => {
    const contadorPeso = mapa.get(derecha[index])
    mapa.set(derecha[index], contadorPeso - 1)
    const dif = Math.abs(izquierda[1] - izquierda[0] + derecha[index])

    // Un peso de cada lado
    if (mapa.get(dif) > 0) {
      answer = derecha[index] > dif ? [dif, derecha[index]] : [derecha[index], dif]
      index = derecha.length
    } else if (
      derecha[index] + derecha[index + 1] + izquierda[0] === izquierda[1]
    ) {
      // Dos peso de cada lado
      answer = [derecha[index], derecha[index + 1]]
      index = derecha.length
    }
  })

  return answer
}

module.exports = balanceDosPesos
