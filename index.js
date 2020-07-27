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
  senior: 6.8,
  fullName: function (){
     this.firstName + this.lastName;
  }
  gpa: function (){
 this.freshman + this.sophmore + this.junior + this.senior / 4;
}
};

console.log(fullname);
console.log(student);
console.log(gpa);
