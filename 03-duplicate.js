function duplicate(arr) {
    let dupes = {}
    for(let i = 0; i < arr.length; i++){
        let el = arr[i]

        if(dupes[el]){return el}
        else {dupes[el] = 1}
    }
}

console.log(duplicate([7,2,4,9,5,4,8])); // => 4
