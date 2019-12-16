'use strict'

const balancear = require('../../index')


// TODO:
// Pruebas con error

describe ('balancear(izquierda, derecha)', () => {
  it ('1, []', async () => {
    await expect(
      balancear(1, []).catch()
    ).rejects.toThrow('Argumentos no validos')
  })
  it('[3, 4], [1, 2, 7, 7]', async () => {
    expect(await balancear([3, 4], [1, 2, 7, 7])).toEqual([1])
  })
  it('[13, 4], [1, 2, 3, 6, 14]', async () => {
    expect(await balancear([13, 4], [1, 2, 3, 6, 14])).toEqual([3, 6])
  })
  it('[10, 5], [2, 4, 6]', async () => {
    expect(await balancear([10, 5], [2, 4, 6])).toEqual([])
  })
})