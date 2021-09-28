import Car from './Car.js'

export default class UberX extends Car {
  constructor(license, driver, brand, model) {
    super(license, driver)
    this.brand = brand
    this.model = model
  }

  printDataCar() {
    super.printDataCar()
    console.group()
    console.group('Carro:')
    console.log('Marca: ' + this.brand)
    console.log('Modelo: ' + this.model)
    console.groupEnd()
    console.groupEnd()
  }
}