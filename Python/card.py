from payment import Payment

class Card(Payment):
  cardNumber = int
  cardDate = str
  cvv = str

  def __init__(self, id, cardNumber, cardDate, cvv):
    super().__init__(id)
    self.cardNumber = cardNumber
    self.cardDate = cardDate
    self.cvv = cvv