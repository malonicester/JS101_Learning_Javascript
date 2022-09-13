let bag = '';
for(let i = 1;i<=5;i++){
  for(let j = 1;j<=i;j++){
    bag+=j+" ";
  }
  console.log(bag)
  bag="";
  for(let k = 1;k<=i;k++){
    bag+='*'+" "
  }
  console.log(bag);
  bag='';
  }