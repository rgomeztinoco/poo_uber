from car import Car

class UberVan(Car):
  typeCarAccepted = []
  seatsMaterial = []

  def __init__(self, license, driver, typeCarAccepted, seatsMaterial):
    super().__init__(license, driver)
    self.typeCarAccepted = typeCarAccepted
    self.seatsMaterial = seatsMaterial

  def __init__(self, license, driver):
    super().__init__(license, driver)
  
  @property
  def passenger(self):
    return self.__passenger

  @passenger.setter
  def passenger(self, passengers):
    if passengers != 6:
      print("Debes tener 6 pasajeros")
    else:
      self.__passenger = passengers
