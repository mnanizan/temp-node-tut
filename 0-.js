// Modules - Encapsulated code(only share minimum)
// CommonJS - every file in Node is module(by default )

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-exports')
// console.log(data)
require('./7-mind-grenade')
sayHi(`susan`)
sayHi(names.john)
sayHi(names.peter)