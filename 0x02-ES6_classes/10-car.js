const BRAND = Symbol('brand');
const MOTOR = Symbol('motor');
const COLOR = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[BRAND] = brand;
    this[MOTOR] = motor;
    this[COLOR] = color;
  }

  get brand() {
    return this[BRAND];
  }

  get motor() {
    return this[MOTOR];
  }

  get color() {
    return this[COLOR];
  }

  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}
