'use strict'

const numerosReales = require('../../utils/numeros-reales')

describe ('numerosReales(arreglo)', () => {
  it ('[2, 1]', () => {
    expect (numerosReales([2, 1])).toBeTruthy()
  })
  it ('["2", 1]', () => {
    expect (numerosReales(["2", 1])).toBeFalsy()
  })
  it ('["hola", "mundo"]', () => {
    expect (numerosReales(["hola", "mundo"])).toBeFalsy()
  })
  it ('[1, true, false]', () => {
    expect (numerosReales([1, true, false])).toBeFalsy()
  })
  it ('{"1": 1, "2": 2}', () => {
    expect (numerosReales({"1": 1, "2": 2})).toBeFalsy()
  })
})