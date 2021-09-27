import Car from './Car.js'

export default class UberBlack extends Car {
  constructor(license, driver, typeCarAcceppted, seatsMaterial) {
    super(license, driver)
    this.typeCarAcceppted = typeCarAcceppted
    this.seatsMaterial = seatsMaterial
  }
}