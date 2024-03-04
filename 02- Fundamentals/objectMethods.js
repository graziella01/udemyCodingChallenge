const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(
  `${
    mark.calcBMI() > john.calcBMI()
      ? `${mark.fullName}'s BMI (${Math.round(
          mark.calcBMI()
        )}) is higher than ${john.fullName}'s(${Math.round(john.calcBMI())})`
      : `${john.fullName}'s BMI (${Math.round(
          john.calcBMI()
        )}) is higher than ${mark.fullName}'s(${Math.round(mark.calcBMI())})`
  }`
);
