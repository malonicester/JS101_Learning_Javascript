let n = 5;
for(let i = 1;i<=n;i++){
  let bag = '';
  for(let j = 1;j<=i;j++){
    if(i==1||i==2||j==1||j==i||i==n){
      
    bag+='*';
    }else{
      bag+=" ";
    }
  }
console.log(bag)
}