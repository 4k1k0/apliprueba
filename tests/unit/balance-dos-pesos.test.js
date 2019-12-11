'use strict'

const balanceDosPesos = require('../../utils/balance-dos-pesos')
const crearMapa = require('../../utils/crear-mapa')

describe ('balanceDosPesos(mapa, izquierda, derecha)', () => {
  it ('{1 => 2, 7 => 1, 9 => 1}, [2, 10], [1, 1, 7. 9]', () => {
    expect (balanceDosPesos(
      crearMapa([1, 1, 7, 9]),
      [2, 10],
      [1, 1, 7, 9]
    )).toEqual([1, 9])
  })
  it ('{2 => 1, 3 => 3, 4 => 1}, [1, 2], [2, 3, 3, 3, 4]', () => {
    expect (balanceDosPesos(
      crearMapa([2, 3, 3, 3, 4]),
      [1, 2],
      [2, 3, 3, 3, 4]
    )).toEqual([3, 4])
  })
})