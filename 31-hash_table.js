class ContactList {
    constructor(size) {
      this.buckets = new Array(size);
      this.numBuckets = this.buckets.length;
    }
  
    hash(name) {
      let total = 0;
      for (let i = 0; i < name.length; i++) {
        total += name.charCodeAt(i);
      }
      return total % this.numBuckets;
    }
  
    insert(name, phone) {
      let index = this.hash(name);
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      this.buckets[index].push([name, phone]);
    }
  
    get(name) {
      let index = this.hash(name);
      if (!this.buckets[index]) {
        return null;
      }
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === name) {
          return this.buckets[index][i][1];
        }
      }
    }
  
    retrieveAll() {
      let all = [];
      for (let i = 0; i < this.numBuckets; i++) {
        if (this.buckets[i]) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            all.push(this.buckets[i][j]);
          }
        }
      }
      return all;
    }
  
    delete(name) {
      let index = this.hash(name)
      if (!this.buckets[index]) {
        return null;
      } else {
        this.buckets[index] = [];
      }
    }
}

const contactList = new ContactList(10);
contactList.insert("Mr michi", "123-456-7890");
console.log(contactList.retrieveAll()); //[["Mr michi", "123-456-7890"]]
console.log(contactList.get("Mr michi")); //"123-456-7890"
contactList.delete("Mr michi");
console.log(contactList.get("Mr michi")); //undefined