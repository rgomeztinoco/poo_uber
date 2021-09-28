from account import Account

class Car:
  id = int
  license = str
  driver = Account("","")
  __passenger = int
  
  def __init__(self, license, driver):
    self.license = license
    self.driver = driver
  
  @property
  def passenger(self):
    return self.__passenger

  @passenger.setter
  def passenger(self, passengers):
    if passengers != 4:
      print("Debes tener 4 pasajeros")
    else:
      self.__passenger = passengers

  def printDataCar(self):
    print("Licencia: " + self.license)
    print("Nombre: " + self.driver.name)
    print("Documento: " + self.driver.document)
    print("Pasajeros: " + str(self.passenger))