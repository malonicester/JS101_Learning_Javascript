let n = 5;
for (let i = n; i >= 1; i--) {
  let bag = '';
  for (let space = 1; space <= n - i; space++) {
    bag += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (i == 1 || i == n || j == 1) {

      bag += "*";
    } else {
      bag += " ";
    }
  }
  for (let col = 2; col <= i; col++) {
    if (col == i || i == n) {

      bag += "*";
    } else {
      bag += " ";
    }
  }
  console.log(bag);
}