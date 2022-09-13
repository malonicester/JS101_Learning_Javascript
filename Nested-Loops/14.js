let n = 5;
for(let row = 1 ; row<=n;row++){
  let bag = "";
  for(let space = 1;space<=n-row;space++){
    bag+=" ";
  }
  for(let col = 1;col<=n;col++){
  if(row==1||row==n||col==1||col==n){
    
    bag+="*"
  } else{
    bag+=" ";
  } 
  
  }
  console.log(bag);
}