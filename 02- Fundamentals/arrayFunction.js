const calcTip = function (bill) {
  if (bill >= 50 || bill <= 300) {
    return console.log(`The bill is ${bill} the  tip is ${bill * 0.15}`);
  } else {
    return console.log(`The bill is ${bill} the  tip is ${bill * 0.2}`);
  }
};

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

// another way
const calcTip1 = function (bill1) {
  return bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
};
const bill1 = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const totalBill = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(bill1, tips, totalBill);
