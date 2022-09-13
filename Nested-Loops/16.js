let n = 5;
for(let i = 1 ;i<=2*n;i++){
  let bag = '';
  let colInRows = i>n?2*n-i:i;
  let spaces = i>n?i-n:n-i;
  for(let j = 1;j<=colInRows;j++){
    bag+="*"
  }
  for(let space = 1;space<=spaces;space++){
    bag+=" ";
  }
  for(let space1 = 1;space1<=spaces;space1++){
    bag+=" ";
  }
  for(let k = 1;k<=colInRows;k++){
    bag+="*";
  }
 
  console.log(bag);
}
