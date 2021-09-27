import Payment from "./Payment"

export default class Card extends Payment {
  constructor(id, cardNumber, cardDate, cvv) {
    super(id)
    this.cardNumber = cardNumber
    this.cardDate = cardDate
    this.cvv = cvv
  }
}