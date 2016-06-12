$(document).ready(function() {
  swal({   title: "Welcome to Zodiac Yo Sign",   text: "Where you can play a cool matching game along with the day's Zodiac reading.",   imageUrl: "sky-stars.gif" , imageSize:"280x280", confirmButtonText: "Cool" });
 console.log('loaded') ;
 var userName=0;


 var imgArray = [
        'http://www.astrology-zodiac-signs.com/images/libra.jpg',
        'http://www.astrology-zodiac-signs.com/images/aries.jpg',
        'http://www.astrology-zodiac-signs.com/images/gemini.jpg',
        'http://www.astrology-zodiac-signs.com/images/aquarius.jpg',
        'http://www.astrology-zodiac-signs.com/images/leo.jpg',
        'http://www.astrology-zodiac-signs.com/images/libra.jpg',
        'http://www.astrology-zodiac-signs.com/images/scorpio.jpg',
        'http://www.astrology-zodiac-signs.com/images/capricorn.jpg',
        'http://www.astrology-zodiac-signs.com/images/sagittarius.jpg',
        'http://www.astrology-zodiac-signs.com/images/leo.jpg',
        'http://www.astrology-zodiac-signs.com/images/cancer.jpg',
        'http://www.astrology-zodiac-signs.com/images/aquarius.jpg',
        'http://www.astrology-zodiac-signs.com/images/capricorn.jpg',
        'http://www.astrology-zodiac-signs.com/images/aries.jpg',
        'http://www.astrology-zodiac-signs.com/images/pisces.jpg',
        'http://www.astrology-zodiac-signs.com/images/taurus.jpg',
        'http://www.astrology-zodiac-signs.com/images/sagittarius.jpg',
        'http://www.astrology-zodiac-signs.com/images/taurus.jpg',
        'http://www.astrology-zodiac-signs.com/images/gemini.jpg',
        'http://www.astrology-zodiac-signs.com/images/virgo.jpg',
        'http://www.astrology-zodiac-signs.com/images/pisces.jpg',
        'http://www.astrology-zodiac-signs.com/images/cancer.jpg',
        'http://www.astrology-zodiac-signs.com/images/virgo.jpg',
        'http://www.astrology-zodiac-signs.com/images/scorpio.jpg',
        ];

  var matched = [];
  var $button = $('#startBtn');
  var tiles = document.querySelectorAll('.tile');
  var matchedDOM = document.querySelectorAll('.matched');
  var matched = [];
  var faceUp = document.querySelectorAll('.face-up');



// function shuffle(){
//   var randomArray = [];
//   for (var i = imgArray.length-1; i > 0; i--) {
//     var j = Math.floor(Math.random() * i);
//     var temp = imgArray[j];
//     imgArray[j] = imgArray[i];
//     imgArray[i]= temp;
//   // Find the item
//   // Then we want to place it in an array.
//   }
// };
// shuffle();

function startGame() {
  $('#startBtn').on('click', buttonClick);
  console.log('start game');
};
startGame();

function buttonClick() {
  // Everytime we go through the imgArray
  for (var i = 0; i < imgArray.length; i++) {
    tiles[i].addEventListener('click', tileClicks);
    console.log('clicked tile');

   userName = swal({
    title: "We need your...",
    text: "Write your name:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something" },
    function(inputValue){   if (inputValue === false) return false;      if (inputValue === "") {     swal.showInputError("You need to write something!");     return false   }
    userName= inputValue;
       swal("Nice!", "You wrote: " + inputValue, "success"); });;
  };
};


function tileClicks(matching){
  matching.target.classList.remove('face-down');
  matching.target.classList.add('face-up');
  matching.target.src = imgArray[matching.target.dataset.id];
  console.log(event.target);
  // console.log(event.target.dataset.id);
  var faceUp = document.querySelectorAll('.face-up');
    if (faceUp.length === 2) {
      if (faceUp[0].src === faceUp[1].src) {
        faceUp[0].classList.add('matched');
        faceUp[1].classList.add('matched');
        faceUp[0].classList.remove('face-up');
        faceUp[1].classList.remove('face-up');
        faceUp[0].removeEventListener('click', tileClicks);
        faceUp[1].removeEventListener('click', tileClicks);

        matched.push(faceUp[0].dataset.id);
        matched.push(faceUp[1].dataset.id);
        // pushing into matched array
        console.log(matched);
      } else if (faceUp[0].src != faceUp[1].src) {
         setTimeout (function(){
          faceUp[0].src = "";
          faceUp[1].src = "";
          faceUp[0].classList.remove('face-up');
          faceUp[1].classList.remove('face-up');
          faceUp[0].classList.add('face-down');
          faceUp[1].classList.add('face-down');
      }, 1000);
      }
    }
    // If statement for the winning message.
  if (matched.length === 24) {
     console.log('You are finshed!');
     setTimeout (function() {
          swal("Congratulations on winning " + userName +"!" + "Don'\t forget to check out your daily horoscope.");
        }, 800);
     // This is where we reset the game.
     // $button.addEventListener('click', function(){
     //    for (var i = 0; i < tiles.length; i++) {
     //      // console.log(tiles);
     //      tiles[i].classList.remove('matched');
     //      tiles[i].setAttribute('src', " ");
     //      tiles[i].classList.add('face-down');
     //      // tiles[i].classList.remove('matched');
     //      }
     // });
  }
};



});
