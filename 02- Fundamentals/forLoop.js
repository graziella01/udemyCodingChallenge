const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const totals = [];
for (let i = 0; i <= bills.length - 1; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  const totalBills = bills[i] + tips[i];
  total.push(totalBills);
}
console.log(bills);
console.log(tips);
console.log(total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //console.log(sum / arr.length);
  return sum / arr.length;
};

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));
