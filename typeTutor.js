
//LETTER BASE
var letterBase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// var randomLetter = Math.floor(Math.random() * 25); 
// var randLetterGetter, randLetterIdentifier,
// randLetterGetter = document.getElementById('randomLetter').textContent = (letterBase[randomLetter]);
// randLetterIdentifier = (letterBase.indexOf(letterBase[randomLetter]));

(function theLoop (i) {
    setTimeout(function () {
        var randomLetter = Math.floor(Math.random() * 25); 
        var randLetterGetter = document.getElementById('randomLetter').textContent = (letterBase[randomLetter]);
        var randLetterIdentifier = (letterBase.indexOf(letterBase[randomLetter]));
      if (--i) {          // If i > 0, keep going
        theLoop(i);       // Call the loop again, and pass it the current value of i
      }
    }, 2000);
  })(15);






//KEYCODE BASE
var keycodeArray = [];

for (keycodeNumber = 97; keycodeNumber <= 122; keycodeNumber++) {
    keycodeArray.push(keycodeNumber);
    }

var pointBank = 0;
var pointDisplay = function() {
    document.getElementById('pointsBar').textContent = 'Points: ' + pointBank;
};

pointDisplay();
document.addEventListener('keypress', function(event) {
    var x, keycodeLogger,
    x = event.keyCode;
    keycodeLogger = (keycodeArray.indexOf(x));
        
    if (keycodeLogger === randLetterIdentifier) {
        console.log('you score a point!');
        pointBank = pointBank + 1;
        pointDisplay();
    } else {
        console.log('You don\'t score a point');
        }
    })


//Date
var now, months, month, year, date;
    
now = new Date();
    
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
month = now.getMonth();
date = now.getDate();
year = now.getFullYear();
// document.getElementById('dateBar').textContent = 'Date: ' + date + ' ' + months[month] + ' ' + year;
document.getElementById('dateBar').textContent = `Date: ${date} ${months[month]} ${year}`;
