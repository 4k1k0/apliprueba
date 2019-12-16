'use strict'

const balancear = require('balancear')

balancear([3, 4], [1, 2, 7, 7]).then(console.log).catch(console.error)
balancear([13, 4], [1, 2, 3, 6, 14]).then(console.log).catch(console.error)
balancear([10, 5], [2, 4, 6]).then(console.log).catch(console.error)

const funcionPrueba = async () => {
  try {
    const a = await balancear({ hola: true, mundo: false }, [2, 2, 5, 77])
    console.log(a)
  } catch (error) {
    console.log('Ocurrio un error...')
    console.error(error)
  }
}

funcionPrueba()
