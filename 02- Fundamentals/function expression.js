const calcAverage1 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins1 = calcAverage1(85, 54, 41);
const scoreKoalas1 = calcAverage1(23, 34, 27);
console.log(scoreDolphins1, scoreKoalas1);
// one way to use function
function checkWinner() {
  const avgDolphins1 = scoreDolphins1;
  const avgKoalas1 = scoreKoalas1;

  if (avgDolphins1 >= 2 * avgKoalas1) {
    console.log(
      `Dolphins win with the score of ${avgDolphins1} vs ${avgKoalas1}`
    );
    return "";
  } else if (avgKoalas1 >= 2 * avgDolphins1) {
    console.log(
      `Koalas win with the score of ${avgKoalas1} vs ${avgDolphins1}`
    );
    return "";
  } else {
    console.log("No Winners");
  }
}

console.log(checkWinner());

// 2nd way function expression

const checkWinner1 = function (avgDolphins1, avgKoalas1) {
  /* const avgDolphins1 = scoreDolphins1;
  const avgKoalas1 = scoreKoalas1; */
  if (avgDolphins1 >= 2 * avgKoalas1) {
    console.log(
      `Dolphins win with the score of ${avgDolphins1} vs ${avgKoalas1}`
    );
    return "";
  } else if (avgKoalas1 >= 2 * avgDolphins1) {
    console.log(
      `Koalas win with the score of ${avgKoalas1} vs ${avgDolphins1}`
    );
    return "";
  } else {
    console.log("No Winners");
  }
};
//this methoa makes the function more reusable
checkWinner1(scoreDolphins1, scoreKoalas1);
