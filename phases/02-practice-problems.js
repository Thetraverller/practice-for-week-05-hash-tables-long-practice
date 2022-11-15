function anagrams(str1, str2) {
  // Your code here
  if (str1.length !== str2.length) {
    return false;
  }

  const chars1 = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];       // iterate through str setting each letter as a char

    if (chars1[char]) {
      chars1[char]++;
    } else {
      chars1[char] = 1;     // char key is undefined in chas1 obj; if not found ++
    }
  }

  const chars2 = {};

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!chars1[char]) {
      return false;
    } else if(chars2[char]) {
      chars2[char]++;
    } else {
      chars2[char] = 1;
    }
  }

  for (let key in chars1) {
    let val1 = chars1[key];
    let val2 = chars2[key];

    if (val1 !== val2) {
      return false;
    }
  }

  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  let larger;
  let smaller;

  if (arr1.length >= arr2.length) {
    larger = arr1;
    smaller = arr2;
  } else {
    larger = arr2;
    smaller = arr1;
  }


}

// console.log(anagrams('elvis', 'lives'));    // => true
// console.log(anagrams('coding', 'rocks'));   // => false

function commonElements(arr1, arr2) {
  // Your code here
  let first = {}
  let second = {};
  let common = [];

  arr1.forEach(
    number => {
      first[number] = 1
    }
  );
  arr2.forEach(
    number => {
      second[number] = 1
    }
  );

  for (number in first) {
    if (second[number]) {
      common.push(Number(number));
    }
  }

  return common;
}

// console.log(commonElements([1,2,3], [3,4,5]));    // => [3]
// console.log(commonElements([2,4,6], [5,4,3,2,1]));    // => [2,4]


function duplicate(arr) {
  // Your code here
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (obj[num]) {
      return num;
    } else {
      obj[num] = 1;
    }
  }
  return obj
}

// console.log(duplicate([2,2,1]));         // => 2
// console.log(duplicate([7,2,4,9,5,4,8])); // => 4


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
};

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

  return
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
