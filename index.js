//----------------------is palindrome-------------------------------------- //
//
// function isPalindrome(str) {
//   let newArr = []

// short version
// return str === str.split("").reverse().join("")

// with normal for
// for (i = str.length; i >= 0; i--) {
//   newArr.push(str[i])
// }
// if (str === newArr.join("")) {
//   return true
// } else {
//   return false
// }

// using map
// str.split("").map((item) => {
//   return newArr.unshift(item)
// })
// return newArr.join("") === str ? true : false
// }

// console.log("Is palindrome? ",isPalindrome("elton"));

//----------------------CALLBACKS-------------------------------------- //

// const getPokemon = (id, cb) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   .then(res=>res.json())
//   .then(data => cb(data))

// }

// getPokemon(10,(data)=> {
//   console.log(data);
// })

//--------------------------FIZZBUZZ------------------------------------- //
// 

//  write a program to print to the screen numbers 1 to n.
//  1-For multiples of 3,print "fizz";
//  2-For multiples of 5,prin "buzz"
//  3-for multiples of 3 and 5 print 'fizzbuzz'

// function fizzbuzz(n) {
//   for (i = 1; i <= n; i++) {
//     if (n % 3 === 0 && n % 5 === 0) {
//       return console.log("fizzBuzz")
//     } else if (n % 3 === 0) {
//       return console.log("fizz")
//     } else if (n % 5 === 0) {
//       return console.log("buz")
//     } else if (i > n) {
//       return console.log(i)
//     }
//   }
// }
// fizzbuzz(15)

//--------------------------SORT STRING ------------------------------------- //

// function sortString(str) {
//   // const strArr = str.split(''); // Convert string to an array of characters
//   //                             3
//   // for (let i = 0; i < strArr.length; i++) {
//   //                           2
//   //   for (let j = 0; j < strArr.length - i - 1; j++) {
//   //         
//   //     if (strArr[j] > strArr[j + 1]) {
//   //       // Swap the characters if they are in the wrong order
//   //       const temp = strArr[j];
//   //       strArr[j] = strArr[j + 1];
//   //       strArr[j + 1] = temp;
//   //     }
//   //   }
//   // }

//   // // Join the sorted array back into a string
//   // const sortedString = strArr.join('');
//   // return sortedString;
//   const strArr = str.split("")
//   for (let i = 0; i <= strArr.length; i++) {
//     for (let j = 0; j < strArr.length - i - 1; j++) {
//       if (strArr[j] > strArr[j + 1]) {
//         let temp = strArr[j]
//         strArr[j] = strArr[j + 1]
//         strArr[j + 1] = temp
//       }
//     }

//   }
//   return strArr.join("")
// }
// const sorted = sortString("dcba");
// console.log(sorted); // Output: "abcd"

//--------------------------is ANAGRAM -------------------------------------- //

// Write a function to check whether two given strings are anagram of each other or not. 
// An anagram of a string is another string that contains the same characters,
// only the order of characters can be different. 
// For example, “abcd” and “dabc” are an anagram of each other.

// function isAnagram(str1, str2) {

//   let str1Arr = str1.toLowerCase().split("")
//   let str2Arr = str2.toLowerCase().split("")

//   //first - sort the first string
//   for (let i = 0; i <= str1Arr.length; i++) {
//     for (let j = 0; j <= str1Arr.length - i - 1; j++) {
//       if (str1Arr[j] > str1Arr[j + 1]) {
//         let temp = str1Arr[j]
//         str1Arr[j] = str1Arr[j + 1]
//         str1Arr[j + 1] = temp
//       }
//     }
//   }

//   for (let i = 0; i <= str2Arr.length; i++) {
//     for (let j = 0; j <= str2Arr.length - i - 1; j++) {
//       if (str2Arr[j] > str2Arr[j + 1]) {
//         let temp = str2Arr[j]
//         str2Arr[j] = str2Arr[j + 1]
//         str2Arr[j + 1] = temp
//       }
//     }
//   }
//   if (str1Arr.join("").toString() === str2Arr.join("")) {
//     console.log("is Anagram")
//   } else {
//     console.log("is not Anagram")
//   }
//   // let strSort1 = str1.split("").sort().join("")
//   // let strSort2 = str2.split("").sort().join("")
//   // if(strSort1 === strSort2){
//   //   console.log("is Anagram")
//   // }else {
//   //   console.log("is not Anagram")
//   // }
// }
// isAnagram("Abcd", "daBc")


//--------------------PROMISES-----------------//

// const promises = new Promise((resolve,reject)=>{
//   reject("OMG!")
// })

// promises.then((data)=>{
//  console.log(data)
// }).catch(err => {
//   console.log(err)
// })

//--------------------Remove duplicates-----------------//

// const arr = [2, 3, 5, 3, 6, 8, 9, 3, 2, 11, 5]
// function removeDuplicates() {
//   const uniqueArray = arr.filter((value, index) => arr.indexOf(value) === index);
//   return uniqueArray

//   const noDuplicates = Array.from(new Set(arr))
//   return noDuplicates
// }
// console.log(removeDuplicates())

//--------------------Find the last element of an array(without using length)-----------------//

// const arr = ["white","red","black","yellow"]

// const lastElement = arr.slice(-1).join("");
// console.log(lastElement)

//--------------------Flatten an array of arrays-----------------//

// let arr = [[0, 1], [2, 3], [4, 5,[2,4]]]
// // const flatIt = arr.flat()
// let newArr = []
// for (let i = 0; i <= arr.length - 1; i++) {
//   for (let j = 0; j <= arr[i].length - 1; j++) {
//     newArr.push(arr[i][j])
//   }
// }
// console.log(newArr);

//--------------------Find repeat values in the array-----------------//
// const arr = [2, 3, 5, 3, 6, 8, 9, 3, 2, 11, 5]
// const rep = []

// arr.filter((item, index) => {
//   if (arr.indexOf(item) !== index) {
//     rep.push(item)
//   }
// })

// console.log(rep);

//------------------More callback----------------------------------//
// function add(a, b) {
//   return a + b
// }

// function devide(a, b) {
//   return a / b
// }

// function calculate(a, b, operarion) {
//   return operarion(a, b)
// }

// console.log(calculate(2, 2, devide));

//-------------------------------------------------//

const rv = (str) => {
  let arr = str.split("")
  let newStr = arr[0]
  let count = 0
  let res = []
  for (let i = 0; i <= arr.length; i++) {
    if (newStr === arr[i]) {
      count++
      res.push(arr[i])
    }
  }
  return res.join(" ")
}

console.log(rv("conclusionnn"))