export default class Car {
  constructor(license, driver){
    this.id
    this.license = license
    this.driver = driver
    this.passenger
  }
  printDataCar() {
    console.log(this.license)
    console.log(this.driver.name)
    console.log(this.driver.document)
  }
}
// Para hacerlo con require
// module.exports = Car