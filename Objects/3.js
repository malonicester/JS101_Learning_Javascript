// print unique elements in an array;
let names = ['suraj','ramu','sonu','ramu','suraj','mohan','ramu'];
let obj = {};
for(let i = 0;i<names.length;i++){
  obj[names[i]] = 1;
}
for(let x in obj){
  console.log(x);
}