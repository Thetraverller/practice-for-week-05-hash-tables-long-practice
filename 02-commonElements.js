function commonElements(arr1, arr2) {
    let first = {}
    let second = {}
    let common = []

    for(let i = 0; i < arr1.length; i++) {
        let el = arr1[i]

        if(first[el]) { first[el]++}
        else {first[el] = 1}
    }

    for(let i = 0; i < arr2.length; i++) {
        let el = arr2[i]

        if(second[el]) { second[el]++}
        else {second[el] = 1}
    }

    for(let key in first) {
        if (second[key]){
            common.push(Number(key))
        }
    }
    return common
}
console.log(commonElements([1,2,3], [3,4,5]));      // => [3]
console.log(commonElements([2,4,6], [5,4,3,2,1]));  // => [2,4]
