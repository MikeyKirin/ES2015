
//Refactor this code using arrow functions.
//function double(arr) {
//    return arr.map(function(val) {
//        return val * 2;
//      });
//   }
const double = arr => arr.map(val => val * 2);

//refractor this code using arrow functions
//function squareAndFindEvens(numbers){
//    var squares = numbers.map(function(num){
//      return num ** 2;
//    });
//    var evens = squares.filter(function(square){
//      return square % 2 === 0;
//    });
//    return evens;
//  }
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);