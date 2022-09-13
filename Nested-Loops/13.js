let n = 5;
for(let row = 1 ;row<=2*n;row++){
  let bag = "";
  let colInRows = row>n ? 2*n - row : row;
   for(let col = 1;col<=colInRows;col++){
    if(col==1||col==colInRows){
      bag+="*";
    }else{
      bag+=" ";
    }
  }
  let spaces =  row>n ? row-n:n-row;
  for(let space = 1 ;space<=spaces;space++){
    bag+="  "
  }
  for(let col = 1;col<=colInRows;col++){
    if(col==1||col==colInRows){
      bag+="*";
    }else{
      bag+=" ";
    }
  }
  console.log(bag);
}
