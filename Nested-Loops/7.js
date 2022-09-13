let n = 5;
for (let row = 1; row<=n ; row++) {
  let bag = '';
  
for (let col = n; col>=row; col--) {
  if(row==1||col==n||col==row){
    bag+="* ";
 
  }else{
    bag+="  "
  }

     }
     console.log(bag)
  
}