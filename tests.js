//Filter
 
function filterNumbersFromArray(arr) {
    // Write the code that goes here
    for (let i = arr.length - 1; i >= 0; i--) {
            if (typeof arr[i] !== "number") {
              arr.splice(i, 1);
            }
          }
  }
 
  var arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);
  // At this point, arr should have been modified in place
  // and contain only 1 and 2.
  for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
//////////////////////////////////////////////////////////////////////////////////////////
//Snapshot
 
class Snapshot {
    constructor(array) {
      this.array = [...array];
    }
   
    restore() {
      return [...this.array];  
    }
  }
 
  var array = [1, 2];
  var snap = new Snapshot(array);
  array[0] = 3;
  array = snap.restore();
  console.log(array.join()); //It should log "1,2"
  array.push(4);
  array = snap.restore();
  console.log(array.join()); //It should log "1,2"
//////////////////////////////////////////////////////////////////////////////////////////
//Array Search
 
function numberOfItems(arr, item) {
    // Write the code that goes here
    var result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        result += numberOfItems(arr[i], item);
      } else {
        if (arr[i] == item) {
          result++;
        }
      }
    }
    return result;  
  }
 
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
  ];
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));
//////////////////////////////////////////////////////////////////////////////////////////
  //Vectors
 
function findShortest(vectors) {
    // Write the code that goes here
    function findLength(vector) {
        let x = Math.pow(vector[0], 2);
        let y = Math.pow(vector[1], 2);
        let z = Math.pow(vector[2], 2);
        return Math.sqrt(x + y + z);
    };
    function getLengthMap(vectors) {
        let lengthMapArray = [];
        for (let i = 0; i < vectors.length; i++) {
          let lengthMap = {};
          lengthMap.length = findLength(vectors[i]);        
          lengthMap.index = i;          
          lengthMapArray.push(lengthMap);
        }
        return lengthMapArray;
    };
    let lengthMap = getLengthMap(vectors);
    lengthMap.sort((a, b) => a.length - b.length);
    return vectors[lengthMap[0].index];
  };
 
  var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
  var shortest = findShortest(vectors);
  console.log(shortest);
////////////////////////////////////////////////////////////////////////////////////////// 
  //Hobbies
 
  function findAllHobbyists(hobby, hobbies) {
    var result = []
    for (let person in hobbies) {
        if (hobbies[person].includes(hobby)) {
          result.push(person);
        }
      }
    return [...result];
  }
 
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
  };
 
  console.log(findAllHobbyists('Yoga', hobbies));
