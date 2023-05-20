class Node {
    // Este código no debe ser modificado ❌
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class LinkedList {
    // Este código no debe ser modificado ❌
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
  
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
  
    delete(value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
            currentNode.next = currentNode.next.next;
            this.length--;
            return;
            }
            currentNode = currentNode.next;
      }
    }
}

class LinkedListRecharged extends LinkedList {
    get(index){
        if (!this.head) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            if (currentNode.next === null) {
            return null;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode.value;
    }

    insertAt(index, value) {
        if (index < 0 || index > this.length) return null;
        const newNode = new Node(value);
        let currentNode = this.head;
        let previousNode = null;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (!previousNode) {
            this.prepend(value);
        } else if (!currentNode) {
            this.append(value);
        } else {
            newNode.next = currentNode;
            previousNode.next = newNode;
            this.length++;
        }
        return null;
    }
  
    toArray() {
        let values = [];
        let currentNode = this.head;
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values;
    }
  
    removeAt(index) {
        const value = this.get(index);
        index < 0 || index >= this.length ? null : this.delete(value);
        return value;
    }
} 

const linkedList = new LinkedListRecharged();
linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");
console.log(linkedList.get(1)); //Días

const linkedList2 = new LinkedListRecharged();
linkedList2.append(1);
linkedList2.append(2);
linkedList2.append(3);
linkedList2.insertAt(1, 5)

console.log(linkedList2.toArray()); //[1, 5, 2, 3]

const linkedList3 = new LinkedListRecharged();
linkedList3.append(1);
linkedList3.append(2);
linkedList3.append(3);
linkedList3.removeAt(1);
console.log(linkedList3.toArray()); //1, 3