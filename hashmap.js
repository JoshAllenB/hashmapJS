class HashTable {
  constructor() {
    this.table = new Array(128);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }

      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }

    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  has(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.table = new Array(128);
    this.size = 0;
  }

  keys() {
    const keys = [];
    for (const values of this.table) {
      if (values) {
        for (const [key, _] of values) {
          keys.push(key);
        }
      }
    }
    return keys;
  }

  value() {
    const valuesArr = [];
    for (const values of this.table) {
      if (values) {
        for (const [_, value] of values) {
          valuesArr.push(value);
        }
      }
    }
    return valuesArr;
  }

  entries() {
    const entriesArr = [];
    for (const values of this.table) {
      if (values) {
        for (const [key, value] of values) {
          entriesArr.push([key, value]);
        }
      }
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(([key, value]) => `[${key}: ${value}]`);
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();

console.log("length: ", ht.length());
console.log("keys: ", ht.keys());
console.log("values: ", ht.value());
console.log("entries: ", ht.entries());

console.log("has spain?", ht.has("spain"));

ht.remove("Spain");
ht.display();

ht.clear();

console.log("after clearing");
ht.display();
