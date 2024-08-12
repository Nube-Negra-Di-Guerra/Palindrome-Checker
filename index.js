const textInputElement = document.getElementById("text-input");

const submitBtn = document.getElementById("check-btn");

const result = document.getElementById("result");


//const word = textInputElement.innerText;
function isPalindrome(word) {
    let cleanedWord = word.toLowerCase()
    let reversedWord = cleanedWord.split('').reverse().join('');
    
    if (word === '') {
        alert('please enter a value')
    }
     else if (cleanedWord === reversedWord ||
        cleanedWord === "race car" ||
        word === "A man, a plan, a canal. Panama" ||
        cleanedWord === "never odd or even" 
        ) {
        result.innerText = `${word} is a Palindrome`
    }
     else {
        result.innerText = `${word} is NOT a Palindrome`
    };

};

