function Queue(){
    let collection = [];

    this.print = ()=>{
        return collection;
    }

    this.enqueue = (element)=> {
        collection.push(element);
    }

    this.dequeue = () => {
        collection.shift();
    }

    this.front = ()=>{
        return collection[0];
    }

    this.isEmpty = () => {
      return collection.length === 0;
    }

}

let file = new Queue();
file.enqueue(6)
file.enqueue(3)
file.enqueue(1)
console.log(file.print())
file.dequeue()
console.log(file.print())
file.dequeue()
console.log(file.print())