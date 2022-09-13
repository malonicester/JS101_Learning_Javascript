let n = 5;
for(let row = n;row>=1;row--){
  let bag= "";
  for(let col = n ;col>=row;col--){
    bag+=String.fromCharCode(64+col)+" ";
  }
  console.log(bag)
}
let str = "a";
