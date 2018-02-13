//var has a function scope
// variables created without var have a global function
// never create a variable without var 
// if the definition of that variable is not found in the function than that
// variable gets added to the global scope

//let and const have block scope
// they are accasseble inside {}
// variables declared with let will be hoisted to the top pf the block too but
// if you try to access them before they are declared you get a refrence error.
// const is not immutable, we'll work with it as it it is in our code
console.log(variableNotDeclaredYetWithVar); //gets undefined
var variableNotDeclaredYetWithVar = "variableNotDeclaredYetWithVar";
console.log(variableNotDeclaredYetWithLET); // gets a reference error
let variableNotDeclaredYetWithLET = "variableNotDeclaredYetWithLET";

function getDate(){
  var date = new Date();
  // var dateYear = date.getFullYear();
  // return dateYear; 
  function formatDate(){
    return date.toString().slice(4);
  }
  return formatDate();
}
getDate();
document.getElementById("casey").innerHTML = getDate() + ' <== la la '; 
////////
function getDate2(){
  var date = new Date();
  var dateYear = date.getFullYear();
  return dateYear; 
}
getDate2();
// console.log("the date variable is not recongnized out here ", date);
//////// 
 


function discountPrices(pricesArray, discountAmount){
  var discountedPrices = [];
  for (var i = 0; i < pricesArray.length; i++){
    var discountedPrice = (pricesArray[i] * discountAmount)/100;
    discountedPrices.push(discountedPrice);
  }
  return discountedPrices;
}
// this function is the same as below becase of hoysting:
function discountPrices(pricesArray, discountAmount){
  var discountedPrices = [];
  var i;
  var discountedPrice;

  for (i = 0; i < pricesArray.length; i++){
    discountedPrice = (pricesArray[i] * discountAmount)/100;
    discountedPrices.push(discountedPrice);
  }
  return discountedPrices;
}
a=[10,20,30,100];
discountPrices(a, 50);