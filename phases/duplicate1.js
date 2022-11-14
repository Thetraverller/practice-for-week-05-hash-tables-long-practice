class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(this.capacity);
    this.count = 0;
    this.data.fill(null,0);

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity
  }


  insert(key, value) {
    // Your code here
    let loadFactor = this.count / this.capacity;

    while(loadFactor >= 0.7) {
      this.resize();
      loadFactor = this.count / this.capacity;
    }

    let pair = new KeyValuePair(key, value);
    let idx = this.hashMod(key);
    let el = this.data[idx];

    if(el) {
      let curr = el;

      while(curr) {
        if(curr.key === key) {
          curr.value = value
          curr = null
        } else {

          if(!curr.next) {
            this.data[idx] = pair;
            this.data[idx].next = el;
            this.count++;
          }
          curr = curr.next

        }
      }

    } else {
      this.data[idx] = pair;
      this.count++;
    }


  }


  read(key) {
    // Your code here
    let idx = this.hashMod(key);
    let curr = this.data[idx];

    while(curr) {
      if (curr.key = key) {
        return curr.value
      } else {
        curr = curr.next
      }
    }

  }


  resize() {
    // Your code here
    this.capacity *= 2;
    let prevData = this.data.map(el => el)

    this.data = new Array(this.capacity);
    this.data.fill(null, 0);
    this.count = 0;

    for(let i = 0; i < prevData.length; i++) {
      let pair = prevData[i];

      if(pair) {
        this.insert(pair.key, pair.value);

        let curr = pair;

        while(curr.next) {
          const newNext = curr.next.next;

          this.insert(curr.next.key, curr.next.value);
          curr.next.next =null
          curr.next = newNext;
        }
      }

    }
  }

  delete(key) {
    let idx = this.hashMod(key);

    let curr = this.data[idx];

    if(!this.read(key)) {
      return `Key not found`
    }

    while (curr.key !== key && curr.next.key !== key) {
      curr = curr.next;
    }

    if  (curr.key === key) {
      const newHead = curr.next;
      curr.next = null;
      this.data[idx] = newHead
      this.count--;
    } else {
      let newNext = curr.next.next;
      curr.next.next = null;
      curr.next = newNext;
      this.count--;

    }
  }


  //close has table class
}


module.exports = HashTable;
