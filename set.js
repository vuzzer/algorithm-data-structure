function mySet(){
    var collection = [];

    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    }

    this.values = function(){
        return collection;
    }

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove = (element) =>{
        if(this.has(element)){
            let index = collection.indexOf(element);
            collection.splice(index,1);
        }
    }

    this.size = ()=>{
        return collection.length;
    }

    this.union = (otherSet)=>{
        let unionSet = mySet();
        let firstValues = this.values();
        let otherValues = otherSet.values;

        firstValues.forEach((e)=>{
            unionSet.add(e);
        });
        otherValues.forEach((e)=>{
            unionSet.add(e)
        });

        return unionSet;
    }

    this.intersection = (otherSet) =>{
        let intersectionSet = mySet();
        let firstValue = this.values();
        firstValue.forEach((e)=>{
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        })
        return intersectionSet;
    }

    this.difference = (otherSet) =>{
        let differenceSet = mySet();
        let firstValue = this.values();
        firstValue.forEach((e)=>{
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }

    this.subset = (otherSet) =>{
        let firstValue = this.values;
        return firstValue.every((value)=>{
            return otherSet.has(value);
        })
    }
}

