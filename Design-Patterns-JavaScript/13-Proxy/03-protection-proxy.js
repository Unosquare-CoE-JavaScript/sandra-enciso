/*
A protection proxy is the kind of proxy that you add in order to control access to a particular resource.
Add protection proxy to control access to a particular resource while preserving the interface as much as you can
*/
/*
This example simulates if a driver's age is less than 16 then can't drive a car
*/
class Car
{
  drive()
  {
    console.log('Car being driven');
  }
}

class CarProxy
{
  constructor(driver)
  {
    this.driver = driver;
    this._car = new Car(); //using underscore is a hint that we're not meant to be accessing it directly
  }

  drive() //replicates the interface but has something extra 
  {
    if (this.driver.age >= 16)
      this._car.drive();
    else
      console.log('Driver too young');
  }
}

class Driver
{
  constructor(age)
  {
    this.age = age;
  }
}

let car = new Car();
car.drive();

let car2 = new CarProxy(new Driver(12)); // try 22
car2.drive();

