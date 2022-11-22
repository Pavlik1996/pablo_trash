const calc = {
  read() {
    this.a = 33;
    this.b = 44;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calc.read();
console.log(calc.sum());
console.log(calc.mul());
