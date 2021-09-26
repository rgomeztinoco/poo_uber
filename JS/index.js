import Car from './Car.js'
import Account from './Account.js'

// Para hacerlo con require (quitar el 'type' : 'modules', del archivo package.json)
// const Account = require("./Account")
// const Car = require("./Car")

let car = new Car("HER23D2", new Account("Andres Herrera", "12345254"))
car.passenger = 4
car.printDataCar()