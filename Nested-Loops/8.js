let n = 5;
for (let row = n; row >= 1; row--) {
  let bag = '';
  for (let space = 1; space <= n - row; space++) {
    bag += " ";
  }
  for (let col = 1; col <= row; col++) {
    if (row == n || col == 1) {
      bag += "*";
    }
    else {
      bag += " ";
    }
  }
  for (let col1 = row; col1 >= 2; col1--) {
  if(row==n||col1==2){
    bag += "*";}
    else{
      bag+=" ";
    }
   }
  console.log(bag);
}
  for(let row1=1;row1<=n;row1++){
    let bag1 = "";
    for(let space=n;space>row1;space--){
      bag1+=" ";}
    
    for(let col1=1;col1<=row1;col1++){
      if(row1==1||col1==1||row1==n){
        
      bag1+="*";
      }else{
        bag1+=" ";
      }
    }
    for(let col2 = 2;col2<=row1;col2++){
      if(row1==1||col2==row1||row1==n){
        
      bag1+="*";
      }else{
        bag1+=" ";
      }
    }
    
  console.log(bag1)
  }

