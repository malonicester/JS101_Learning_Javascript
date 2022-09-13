let n = 5;
for(let row = 1;row<=2*n;row++){
  let bag = '';
  let colInRows = row>n?2*n-row:row;
  let spaceIn = row>n ? row - n :n-row;
  for(let space = 1;space <= spaceIn;space++ ){
    bag+=" ";
  }
  for(let col = 1;col<=colInRows;col++){
    bag+="* ";
  }
  console.log(bag);
}