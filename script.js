"use strict";
//Question 1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020 - 01 - 24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018 - 05 - 14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019 - 07 - 05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020 - 04 - 22",
    passed: true,
  },
];

// console.log(submissions);

//Question 2
const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60, //evaluates true or false because passed is a true or false value
  };
  array.push(newSubmission);
};

// addSubmission(submissions, "Jackie", 70, "2020 - 07 - 29");
// console.log(submissions);

//Question 3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 3);
// console.log(submissions);

//Question 4
const deleteSubmissionByName = (array, name) => {
  let indexToDelete = array.findIndex((item) => {
    return array.name === name;
  });
  array.splice(indexToDelete, 1);
};

// deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

//Question 5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60; //evaluates true or false because passed is a true or false value
};

// editSubmission(submissions, 0, 50);
// console.log(submissions);

//Question 6
const findSubmissionByName = (array, name) => {
  let found = array.find((student) => {
    return student.name === name;
  });
  return found;
}; // this returns only the lowest score

// console.log(findSubmissionByName(submissions, "Jill"));

// Question 7
//how I did it originally...
/*const findLowestScore = (array) => {
  let currentScore = 100;
  array.forEach((arrObj) => {
    if (arrObj.score < currentScore) {
      currentScore = arrObj.score;
    }
  });
  return currentScore;
};

console.log(submissions);
console.log(findLowestScore(submissions));*/

const findLowestScore = (array) => {
  let currentScore = array[0]; //we're starting at the object at the index of 0
  array.forEach((arrObj) => {
    if (arrObj.score < currentScore.score) {
      //because currentScore is set to an array object we use dot notation to check the score
      currentScore = arrObj;
    }
  });
  return currentScore;
};

// console.log(submissions);
// console.log(findLowestScore(submissions)); // this returns the whole object with the lowest score

//Question 8
const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

// console.log(findAverageScore(submissions));

//Question 9
const filterPassing = (array) => {
  let passingScores = array.filter((arrObj) => {
    return arrObj.score >= 60;
  });
  return passingScores;
};

console.log(filterPassing(submissions));

//Question 10
const filter90AndAbove = (array) => {
  let over90 = array.filter((arrObj) => {
    return arrObj.score >= 90;
  });
  return over90;
};

// console.log(filter90AndAbove(submissions));

//extended challenge

const createRange = (start, end) => {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
};

console.log(createRange(10, 20));

let arrayOfStrings = ["a", "b", "c", "a", "a", "c"];
let arrayOfWords = ["Hello", "Hey", "Hello", "Howdy", "Hey"];
const countElements = (array) => {
  let newObj = {};
  array.forEach((str) => {
    if (newObj.hasOwnProperty(str)) {
      newObj[str]++;
    } else {
      newObj[str] = 1;
    }
  });
  return newObj;
};
console.log(countElements(arrayOfStrings));
console.log(countElements(arrayOfWords));
