let n = 5;
for(let i = 1;i<=n;i++){
  let bag = '';
  for(let space = 1;space<=n-i;space++){
    bag+=" ";
  }
  for(let j  = 1;j<=i;j++){
    bag+="* ";
  }
  console.log(bag);
}