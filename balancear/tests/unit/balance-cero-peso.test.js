'use strict'

const balanceCeroPeso = require('../../utils/balance-cero-peso')

describe ('balanceCeroPeso(arreglo)', () => {
  it ('[2, 1]', () => {
    expect (balanceCeroPeso([2, 1])).toBe(undefined)
  })
  it ('[1, 3]', () => {
    expect (balanceCeroPeso([1, 3])).toBe(undefined)
  })
  it ('[2, 2]', () => {
    expect (balanceCeroPeso([2, 2])).toEqual([])
  })
})