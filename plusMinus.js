function plusMinus(arr) {
    // Write your code here
    let length = arr.length;
    
    let positive = arr.filter((e)=>{
        return e > 0
    });
    let negative = arr.filter((e)=>{
        return e < 0
    });
    let zeros = arr.filter((e)=>{
        return e === 0
    });
    
    console.log((positive.length/length).toFixed(6))
    console.log((negative.length/length).toFixed(6))
    console.log((zeros.length/length).toFixed(6))

}

function staircase(n) {
    // Write your code here
    let stair = "";
    let block = "#";
    let space = " ";
    let limit = "\n";
    for(let i = 0; i < n; i++){
        stair = stair + space.repeat(n-(i+1)) + block.repeat(i+1) + limit;
    }
    console.log(stair)
}

function miniMaxSum(arr) {
    // Write your code here
    let minArr = arr;
    let maxArr = arr;
    let n = arr.length;
    let min = null;
    let max = null;
    
    for(let i = 0; i < 4; i++){
        let min_arr = Math.min(minArr);
        min = min + min_arr;
        let index_min = minArr.indexOf(min);
        minArr.splice(index_min,1);
        
        let max_arr = Math.max(...maxArr);
        max = max + max_arr;
        let index_max = maxArr.indexOf(max);
        maxArr.splice(index_max, 1);
    }
    
    console.log(min," ", max);  
    
}

function duplicateNums(nums){
    let duplicate = nums.filter((value, index) => nums.indexOf(value) !== index);
    let replaced = []

    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(nums[i]) !== i ){
            replaced.push(i + 1 )
        }
    }

    //console.log(duplicate)
    return [duplicate, replaced]
}

//miniMaxSum([1,2,3,4,5]);
let min = [1,2,3,4,5,4];
console.log(duplicateNums([1,2,3,4,3,4,2]))