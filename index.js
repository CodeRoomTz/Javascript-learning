// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//     unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
//     };


// hummus(4);

// the codes to return smallest number...
// let minimum = function(a,b){
//  if(a<b){
//      return a;
//  }else if(b<a){
//      return b;
//  }else return "a is equal to b";
// }
// console.log(minimum(3,2));

// for (let index = 0; index < listOfNumber.length; index++) {
//     const element = listOfNumber[index];
    
// }
// let listOfNumber =[];

function numFactorial(num){
let value = 1;

    for (let i = 1; i <= num; ++i) {
       value =  value *i;
    }
     return value;
}



console.log(numFactorial(3));