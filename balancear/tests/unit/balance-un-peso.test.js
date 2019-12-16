'use strict'

const balanceUnPeso = require('../../utils/balance-un-peso')
const crearMapa = require('../../utils/crear-mapa')

describe ('balanceUnPeso(mapa, pesos)', () => {
  it ('{1 => 2, 2 => 1, 3 => 2, 4 => 1, 5 => 1}, [1, 2]', () => {
    expect (balanceUnPeso(
      crearMapa([1, 1, 2, 3, 3, 4, 5]),
      [1, 2]
    )).toBe(1)
  })
  it ('{4 => 1, 5 => 1}, [1, 20]', () => {
    expect (balanceUnPeso(
      crearMapa([4, 5]),
      [20, 1]
    )).toBe(false)
  })
})