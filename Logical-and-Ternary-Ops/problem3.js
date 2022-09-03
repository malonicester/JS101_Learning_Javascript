let subject = "english";
let marks  = 75;
let pass_marks = 70;

// Nested 
if(subject=="english"){
  if(marks>pass_marks){
    console.log("passed in english");
  }
}
  else{
    console.log("Failed");
  }
// Logical Operator
if(subject == "english" && marks > pass_marks){
  console.log("Passed in english")
}
else{
  console.log("Failed");
}

// Ternary Ops
subject=='english' && marks > pass_marks ?  console.log("Passed in english") : console.log("Failed");