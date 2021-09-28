import Car from './Car.js'

export default class UberVan extends Car {
  // constructor(license, driver, typeCarAcceppted, seatsMaterial) {
  //   super(license, driver)
  //   this.typeCarAcceppted = typeCarAcceppted
  //   this.seatsMaterial = seatsMaterial
  // }
  constructor(license, driver) {
    super(license, driver)
  }

  get passenger() {
    return this._passenger
  }

  set passenger(passengers) {
    if (passengers != 6) {
      console.log("Debes tener 6 pasajeros")
    } else {
      this._passenger = passengers
    }
  }
}