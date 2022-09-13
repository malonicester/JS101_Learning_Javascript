let n = 5;
for(let i =1;i<=n;i++){
  let bag = '';
  for(let space = 1;space<=i;space++){
    bag+=" ";
  }
  for(let j = n;j>=i;j--){
    bag+="* ";
  }
  console.log(bag);
}