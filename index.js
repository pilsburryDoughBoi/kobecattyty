// Data Types
// Objects -- car, student, table
// Boolean -- true/false
// Strings -- "abc", "Hello"
// Numbers -- integers (0, 4, 567), floating point (3.14)
// Arrays -- ["abc", "Hello"]
// Characters -- 'a', '$', '\n'

// my object
var student = {
  firstName: "Princess",
  lastName: "Fionna",
  age: 50,
  eyeColor: "blue",
  race: "oger/human",
  gradelvl: "graduated",
  address: "The Swamp",
  parents: "king Harold and queen Lillian",
  freshman: 4.0,
  sophmore: 4.87,
  junior: 5.30,
  senior: 6.8
  };
console.log(student);

 function getGpa(){
    var gpa = 
 student.freshman + student.sophmore + student.junior +student.senior / 4;
 console.log(gpa);
}
getGpa();

var player = {
  name: "unknown",
  color: "red/yellow/brown",
  accessories: "sachel and chicken friend",
  race: "cat",
  likes: "sushi and sweets",
  goal: "find the ancient wish rose"
};
console.log(player);
