'use strict'

const crearMapa = require('../../utils/crear-mapa')

describe ('crearMapa(arreglo)', () => {
  it ('[1, 1, 1, 2, 3]', () => {
    expect (crearMapa([1, 1, 1, 2, 3])).toEqual(
      new Map([
        [1, 3],
        [2, 1],
        [3, 1],
      ])
    )
  })
  it ('[1, 2, 3]', () => {
    expect (crearMapa([1, 2, 3])).toEqual(
      new Map([
        [1, 1],
        [2, 1],
        [3, 1],
      ])
    )
  })
  it ('[1, 2, 2, 3, 3]', () => {
    expect (crearMapa([1, 2, 2, 3, 3])).toEqual(
      new Map([
        [1, 1],
        [2, 2],
        [3, 2],
      ])
    )
  })
})