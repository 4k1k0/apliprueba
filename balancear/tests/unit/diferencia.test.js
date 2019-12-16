'use strict'

const diferencia = require('../../utils/diferencia')

describe ('diferencia(arreglo)', () => {
  it ('[2, 1]', () => {
    expect (diferencia([2, 1])).toBe(1)
  })
  it ('[8, 1]', () => {
    expect (diferencia([8, 1])).toBe(7)
  })
  it ('[1, 3]', () => {
    expect (diferencia([1, 3])).toBe(2)
  })
})