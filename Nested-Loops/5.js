let str = ["ashish",'Naman',"Ajay",'Pulkit','Nrupul'];
let count = 0;


for(let i = 0;i<str.length;i++){
  for(let j = 0;j<str[i].length;j++){
    if(str[i][j]=='A' || str[i][j]=='a'){
      count++;
      break;
    }
  }
}

console.log(count)
