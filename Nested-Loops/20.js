let N = 4;
let n = 0;
let a = 1;
for(let i = 0;i<N;i++){
  n = n + (N-i);
  let bag = "";
  for(let space = 0;space<i;space++){
    bag+="  ";
  }
  for(let j = a;j<=n;j++){
    bag+=j+" ";
  }
  a = n+1 ;
  console.log(bag);
}