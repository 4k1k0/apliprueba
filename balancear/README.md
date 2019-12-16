# Balancear

Este paquete provee de una función, la cual retorna una promesa para resolver el problema de balanceamiento de números.

## Instalación

```
$ yarn
```

o

```
$ npm install
```

## Pruebas

Este proyecto utiliza [jest](https://jestjs.io) para hacer pruebas unitarias.

```
$ npm run test
```

## Uso

```javascript
const balancear = require('balancear')

balancear([3, 4], [1, 2, 7, 7]).then(console.log).catch(console.error)

const funcionPrueba = async () => {
  try {
    const a = await balancear({ hola: true, mundo: false }, [2, 2, 5, 77])
    console.log(a)
  } catch (error) {
    console.error(error)
  }
}
```