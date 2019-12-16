'use strict'

const ordenaArreglo = require('../../utils/ordena-arreglo')

describe ('ordenaArreglo(arreglo)', () => {
  it ('[2, 1]', () => {
    expect (ordenaArreglo([2, 1])).toEqual([1, 2])
  })
  it ('[1, 1]', () => {
    expect (ordenaArreglo([1, 1])).toEqual([1, 1])
  })
  it ('[1, 2]', () => {
    expect (ordenaArreglo([1, 2])).toEqual([1, 2])
  })
})