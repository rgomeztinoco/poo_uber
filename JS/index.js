import Account from './Account.js'
import UberX from './UberX.js'
import UberPool from './UberPool.js'

// Para hacerlo con require (quitar el 'type' : 'modules', del archivo package.json)
// const Account = require('./Account')
// const Car = require('./Car')

let uberX = new UberX('FDR232', new Account('Andres Herrera', 'AND54R'), 'Chevrolet', 'Spark')
uberX.id = 'Carro de Andres'
uberX.printDataCar()

let uberPool = new UberPool('DGC548', new Account('Francisco Sagasti', 'FR56ALF'), 'Dodge', 'Attitude')
uberPool.id = 'Carro de Francisco'
uberPool.printDataCar()