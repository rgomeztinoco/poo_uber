export default class Car {
  constructor(license, driver){
    this.id
    this.license = license
    this.driver = driver
    this.passenger
  }
  printDataCar() {
    console.group(this.id)
    console.log('License: ' + this.license)
    console.log('Nombre: ' + this.driver.name)
    console.log('DNI: ' + this.driver.document)
    console.groupEnd()
  }
}
// Para hacerlo con require
// module.exports = Car