function anagrams(str1, str2) {
  // Your code here
  let chars1 = {}
  let chars2 = {}

  for(let i = 0; i < str1.length; i++) {
    let char = str1[i]

    if(chars1[char]){chars1[char]++}
    else {chars1[char] = 1}
  }

  for(let i = 0; i < str2.length; i++) {
    let char = str2[i]

    if(chars2[char]) {chars2[char]++}
    else {chars2[char] = 1}
  }

  for (let key in chars1) {
    let val1 = chars1[key]
    let val2 = chars2[key]

    if(val1 !== val2){
      return false
    }
  }
  return true
}

console.log(anagrams('elvis', 'lives'));   // => true
console.log(anagrams('coding', 'rocks'));  // => false

function commonElements(arr1, arr2) {
  // Your code here
  let first = {}
  let second = {}
  let common = []

  for(let i = 0; i < arr1.length; i++){
    let num = arr1[i]

    if(first[num]) {first[num]++}
    else{first[num] = 1}
  }

  for(let i = 0; i < arr2.length; i++){
    let num = arr2[i]

    if(second[num]) {second[num]++}
    else{second[num] = 1}
  }

  for (let key in first) {
    let val1 = first[key]
    let val2 = second[key]

    if(val1 > 0 && val2 > 0) {
      common.push(Number(key))
    }
  }
  return common
}

console.log(commonElements([1,2,3], [3,4,5]));      // => [3]
console.log(commonElements([2,4,6], [5,4,3,2,1]));  // => [2,4]


function duplicate(arr) {
  // Your code here
  let dupes = {}

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]

    if(dupes[num]) {return num}
    else{dupes[num] = 1}
  }
}

console.log(duplicate([2,2,1]));         // => 2
console.log(duplicate([7,2,4,9,5,4,8])); // => 4

function twoSum(nums, target) {
  // Your code here
  let numsSet = new Set(nums);

  for (let num of numsSet) {
    let factor = target - num;

    if ( numsSet.has(factor) && factor !== num ) {
      return true;
    }
  };

  return false;
}

console.log(twoSum([2, 7, 11, 15], 22)); // => true
console.log(twoSum([3, 4, 5], 6));      // => false


function wordPattern(pattern, strings) {
  // Your code here
  const model = {};
  const assigned = new Set()

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    let key = pattern[i];

    if ( !model[key] && !assigned.has(str) ) {
      model[key] = str;
      assigned.add(str);
    } else if (model[key] !== str) {
      return false;
    }
  }

  return true;
}

wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog']);     // => true
wordPattern("ABBA", ['dog', 'dog', 'dog', 'dog']);     // => false
wordPattern("AAAA", ['dog', 'dog', 'dog', 'dog']);     // => true
wordPattern("ABCD", ['dog', 'cat', 'dog', 'cat']);     // => false


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
