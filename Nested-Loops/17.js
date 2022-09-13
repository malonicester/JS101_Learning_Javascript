let n = 5;
for(let i = 1 ;i<=n;i++){
  let bag = '';
 
  for(let j = 1;j<=i;j++){
    bag+=j;
  }
  for(let space = 1;space<=n-i;space++){
    bag+="  ";
  }
  
  for(let k = i;k>=1;k--){
    bag+=k;
  }
 
  console.log(bag);
}