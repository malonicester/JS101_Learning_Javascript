let str = "masai";
let obj = {};
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]]) {
    obj[str[i]]++;
  } else {
    obj[str[i]] = 1;
  }
}
console.log(obj);
