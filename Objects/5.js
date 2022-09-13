let str = "abc"
let K = 3;
let N = 30; let sum = 0;
let abc = "a"
let asc = abc.charCodeAt(0) - N;

for (let i = 0; i < K; i++) {
let val = str.charCodeAt(i) - asc;
  sum += val;
}
console.log(sum);