function anagrams(str1, str2) {
    // Your code here
    let chars1 = {}
    let chars2 = {}

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i]

        if (chars1[char]) {chars1[char]++}
        else{chars1[char] = 1}
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i]

        if (chars2[char]) {chars2[char]++}
        else{chars2[char] = 1}
    }

    for (let key in chars1) {
        let val1 = chars1[key]
        let val2 = chars2[key]

        if(val1 !== val2) {
            return false
        }
    }
    return true

  }

  console.log(anagrams('elvis', 'lives'));     // => true
  console.log(anagrams('coding', 'rocks'));    // => false
