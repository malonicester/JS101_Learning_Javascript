let n = 5;
for (let row = 1; row <=n; row++) {
  let bag = ''
    for (let col1 = 1; col1 <=row; col1++) {
      bag+="*"
      }
      for (let space = 1; space <= n-row; space++) {
        bag+="  ";
        }
        for (let col2 = 1; col2 <=row; col2++) {
          bag+="*";
          }
          console.log(bag);
}
for (let row = n; row >=1; row--) {
  let bag = ''
    for (let col1 = 1; col1 <=row; col1++) {
      bag+="*"
      }
      for (let space = 1; space <= n-row; space++) {
        bag+="  ";
        }
        for (let col2 = 1; col2 <=row; col2++) {
          bag+="*";
          }
          console.log(bag);
}