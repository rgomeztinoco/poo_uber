export default class Car {
  constructor(license, driver){
    this.id
    this.license = license
    this.driver = driver
    this._passenger
  }

  get passenger() {
    return this._passenger
  }

  set passenger(passengers) {
    if (passengers != 4) {
      console.log("Debes tener 4 pasajeros")
    } else {
      this._passenger = passengers
    }
  }

  printDataCar() {
    console.group(this.id)
    console.log('License: ' + this.license)
    console.log('Nombre: ' + this.driver.name)
    console.log('DNI: ' + this.driver.document)
    console.log('Pasajeros: ' + this.passenger)
    console.groupEnd()
  }
}
// Para hacerlo con require
// module.exports = Car