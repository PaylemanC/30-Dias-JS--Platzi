function arrayModified() {
    Array.prototype.myFilter = function (callback) {
      const filteredArray = [];
      for (let i of this) {
        if (callback(i)) {
          filteredArray.push(i);
        }
      }
      return filteredArray;
    }
}

const array = [1,2,3,4,5,6]
array.myFilter(num => num % 2 === 0) //[2,4,6]

const arr = [
	{
	  name: "Juan",
	  age: 10,
	},
	{
	  name: "Pedro",
	  age: 20,
	},
	{
	  name: "Maria",
	  age: 30,
	},
  ];
array.myFilter((person) => person.age > 18) 
/*[
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
]*/
