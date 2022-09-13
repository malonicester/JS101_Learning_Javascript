let n = 5;
for(let row = 1;row<=n;row++){
  let bag = '';
  for(let space = 1;space<=n-row;space++){
    bag+="  ";
  }
  for(let col = row;col>=1;col--){
    bag+=col+" ";
  }
  for(let col2 = 2;col2<=row;col2++){
    bag+=col2+" ";
  }
  console.log(bag);
}