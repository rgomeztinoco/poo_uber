import Car from './Car.js'

export default class UberVan extends Car {
  constructor(license, driver, typeCarAcceppted, seatsMaterial) {
    super(license, driver)
    this.typeCarAcceppted = typeCarAcceppted
    this.seatsMaterial = seatsMaterial
  }
}