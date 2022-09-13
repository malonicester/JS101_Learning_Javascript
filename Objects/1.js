let details = {
  name:'Aman',
  age:34,
  location:'Delhi',
  pincode:110588,
  math:96,
  phy:75,
  chem:78,
  eng:45
}
details['job']= 'Developer'
details['hobby'] = ["Singing","dancing",'Adventure Sports'];
details['vacation'] = 'Kashmir';
details.age = 35;
details.contact = 'abc@gmail.com'
for(let x in details){
  console.log(x+": "+details[x])
}
