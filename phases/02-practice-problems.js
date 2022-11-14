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

console.log(anagrams('elvis', 'lives'));    // => true
console.log(anagrams('coding', 'rocks'));   // => false

function commonElements(arr1, arr2) {
  // Your code here
}


function duplicate(arr) {
  // Your code here
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
