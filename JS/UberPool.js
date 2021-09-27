import Car from './Car.js'

export default class UberPool extends Car {
  constructor(license, driver, brand, model) {
    super(license, driver)
    this.brand = brand
    this.model = model
  }
}