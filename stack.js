let letters = [];
let rword = "";
let word = "developer";

for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
}

for(let i = 0; i < word.length; i++){
    rword += letters.pop();
}

console.log('original '+word)
console.log('inverse '+ rword);



