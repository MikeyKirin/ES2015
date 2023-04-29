// Object Destructuring 1
// What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ANSWER: 8
console.log(yearNeptuneDiscovered); // ANSWER: 1846


// Object Destructuring 2
// What does the following code return/print?
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ANSWER: {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659


//   Object Destructuring 3
//   What does the following code return/print?
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ANSWER: Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // ANSWER: Your name is Melissa and you like green
  getUserData({}) // ANSWER: Your name is undefined and you like green