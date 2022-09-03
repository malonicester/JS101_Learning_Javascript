let total_bill = 6785;
let discount_amount = 3999;

if (total_bill >= discount_amount) {
  let new_bill = total_bill - (total_bill / 10);
  console.log(new_bill);
}
else {
  console.log(total_bill);
}