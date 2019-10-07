var pw = [];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbols = ['!', '@', '#', '$'];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

/* defined function */
function createPassword() {
    var pwLen = prompt('How Long Is Your Password');
    var isSymbols = confirm('Do you want to use symbols?');
    var isNumbers = confirm('Do you want to use numbers?');
    var isUpper = confirm('Do you want to use uppercase letters?');
    for (i = 0; i < pwLen; i++) {
        if (isSymbols === true && i === 0) {
            var randomSymNo = Math.floor(Math.random() * symbols.length);
            /* inject a symbol in the string */
            pw.push(symbols[randomSymNo]);
        } 
        if (isNumbers === true && i === 1) {
            var randomNumNo = Math.floor(Math.random() * numbers.length);
            pw.push(numbers[randomNumNo]);
        } 
        if (isUpper === true && i === 2) {
            var randomUppNo = Math.floor(Math.random() * upper.length);
            pw.push(upper[randomUppNo]);
        } else {
            var randomNo = Math.floor(Math.random() * letters.length);
            pw.push(letters[randomNo]);
        }
    }
    /* randomize array */
    pwShuffle = shuffle(pw);
    pwBox.innerHTML = pwShuffle.join('');
};


//copy to clipboard
function copyPass() {
    var str = document.getElementById("pwBox").innerHTML;
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
};

/* first event */
// change this pw into a dynamic random pw
//document.write(pw)
