import "./styles.css";

const arrNames = ["Lina", "John", "Hernando", "Maria"];

const filteredNames = arrNames.filter((name) => name.length >= 5);

// console.log(filteredNames);

const arrNumbers = [2, 3, 4, 5, 6, 7];
// write a function that takes an array of numbres and returns the sum of all the numbers in the array

const initialValue = 0;
const sum = arrNumbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

// console.log(sum);

//Square the value of every element in the array. Presume that you will only get numbers in the input array.
// expected output   [ 1, 4, 9, 16, 25]

const nums1 = [1, 2, 3, 4, 5];

// const arrSquared = input.map((num) => num * num);
// console.log(arrSquared);

const usingMath = nums1.map((num) => Math.pow(num, 2));
// console.log(usingMath)

//If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const nums2 = [1, -4, 12, 0, -3, 29, -150];

const addPositiveNums = nums2
  .filter((num) => num > 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(addPositiveNums)

// Calculate the mean and median values of the number elements from the input array.
// expected output { mean: 38.5, median: 32 }

const num3 = [12, 46, 32, 64];
const sorted = num3.sort((a, b) => a - b);

const meanCal = num3.reduce((previous, current) => previous + current, 0);

const mean = meanCal / 4;

// console.log(mean);

// https://crocoder.dev/blog/map-filter-reduce-exercises/#array-squared

//the mean = the sum of all values divided by the total number of values.
// [12+46+32+64 / 4] = 38.5

//the median = the middle number in an ordered data set.
//[12,32, 46, 64] median = 32

//The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

const longAssName = "George Raymond Richard Martin";

//expected output "GRRM"
// ["George", "Raymond", "Richard", "Martin"]
const names = longAssName.split(" ");

const getFirst = names.map((name) => name[0]).join("");
// console.log(getFirst);

// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const users = [
  {
    name: "John",
    age: 13
  },
  {
    name: "Mark",
    age: 56
  },
  {
    name: "Rachel",
    age: 45
  },
  {
    name: "Nate",
    age: 67
  },
  {
    name: "Jeniffer",
    age: 65
  }
];

const findAges = (users) => {
  const ages = users.map((user) => user.age);
  const oldestAge = Math.max(...ages);
  const youngestAge = Math.min(...ages);
  const difference = oldestAge - youngestAge;
  return [youngestAge, oldestAge, difference];
};

// console.log(findAges(users));

// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const sentence = "Every developer likes to mix kubernetes and javascript";
