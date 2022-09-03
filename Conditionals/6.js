let reg_email = "abc@gmail.com";
let reg_pass = "1234567";

let enter_email = "abc@gmail.com";
let enter_pass = "1234567";

if(enter_email == reg_email){
  if(enter_pass == reg_pass){
    console.log("Login successful");
  }
  else{
    console.log("Incorrect password");
  }
}
else{
  console.log("Incorrect Credentials");
}