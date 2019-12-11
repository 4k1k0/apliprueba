'use strict'

const balancear = require('../../index')

describe ('balancear(izquierda, derecha)', () => {
  it ('1, []', async () => {
    await expect(balancear).toThrow(Error)
  })
})