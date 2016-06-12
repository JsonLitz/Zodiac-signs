$(document).ready(function() {
  swal({   title: "Welcome to Zodiac Yo Sign",   text: "Where you can play a cool matching game along with the day's horoscope reading.",   imageUrl: "sky-stars.gif" , imageSize:"280x280", confirmButtonText: "Cool" });
 console.log('loaded') ;
 var userName=0;


 var imgArray = [
 // All images are not mine and were taken from http://www.astrology-zodiac-signs.com/
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



function shuffle(){
  var randomArray = [];
  for (var i = imgArray.length-1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = imgArray[j];
    imgArray[j] = imgArray[i];
    imgArray[i]= temp;
  // Find the item
  // Then we want to place it in an array.
  }
};
shuffle();

// Function for animations(animate.css)
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

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
    userName = inputValue;
       swal("Nice!", "You wrote: " + inputValue, "success"); });;
  };
};


function tileClicks(matching){
  matching.target.classList.remove('face-down');
  matching.target.classList.add('face-up');
  matching.target.src = imgArray[matching.target.dataset.id];
  $(this).animateCss('flipInX');
  // The above line was implemented using the Framework animate
  console.log(matching.target);
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

    // Conditional statement when the tiles are matched, the horoscope pops up
    if (faceUp[0].src == "http://www.astrology-zodiac-signs.com/images/libra.jpg" && faceUp[1].src =='http://www.astrology-zodiac-signs.com/images/libra.jpg') {
      swal("Libra (Sep23 - Oct22)", "Relationships of all kinds are likely to be strengthened by an increased level of understanding today, Libra. Your thinking is greatly enhanced by your emotional intuitiveness, so you'll be more able than usual to identify with the needs and desires of those around you. As a result, acquaintances could become friends, and friendships could progress into bonds that last for life. Romance also benefits from intensified empathy. Enjoy.");
    }else if (faceUp[0].src =='http://www.astrology-zodiac-signs.com/images/aries.jpg' && faceUp[1].src=='http://www.astrology-zodiac-signs.com/images/aries.jpg') {
      swal("Aries (Mar22 - Apr19)", "Today should prove to be a wonderful day, Aries. Your physical energy is good, and you should be looking and feeling wonderful. Though you'll probably want to spend most of the day at home, you're likely to attract lots of interesting people in intriguing fields into your aura. Your ability to express your feelings is also high, so expect some stimulating conversations about whatever strikes your fancy. Enjoy your day.");
    }else if (faceUp[0].src == 'http://www.astrology-zodiac-signs.com/images/gemini.jpg' && faceUp[1].src == 'http://www.astrology-zodiac-signs.com/images/gemini.jpg') {
      swal("Gemini (May21 - Jun20)", "A group with which you're affiliated with could suddenly seem to grow closer, and a family feeling could develop among its members. One of the members could suddenly appear to you in a new light, Gemini, and a romantic attraction might develop. Whether you pursue it or not depends on your situation, but you'll still feel closer to your friends now. Some intimate conversations could take place amid discussions of other matters.");
    }else if(faceUp[0].src =='http://www.astrology-zodiac-signs.com/images/aquarius.jpg' && faceUp[1].src == 'http://www.astrology-zodiac-signs.com/images/aquarius.jpg') {
      swal("Aquarias (Jan20 - Feb18)", "Someone distraught or angry, perhaps a relative, might phone you today expecting a sympathetic ear and soothing words. You'll be more than able to provide them. This is a great day for writing, whether a letter to a friend or the first chapter of a novel. Your ability with words is operating at a high level. If you're planning to teach or speak to a group, know that words will flow freely.");
    }else if(faceUp[0].src == 'http://www.astrology-zodiac-signs.com/images/leo.jpg' && faceUp[1].src =='http://www.astrology-zodiac-signs.com/images/leo.jpg') {
      swal("Leo (Jul23 - Aug22)", "Family members who live far away might be planning a visit, and you could discuss it at some length today, Leo. A lot of phone calls or emails could be exchanged. You might be considering a move to another state or country, but you aren't likely to make definite plans now. Whatever your plans, however, they're likely to prove exciting and cause you to anticipate the future. Enjoy your day.");
    }else if(faceUp[0].src == 'http://www.astrology-zodiac-signs.com/images/virgo.jpg' && faceUp[1].src == 'http://www.astrology-zodiac-signs.com/images/virgo.jpg'){
      swal("Virgo (Aug23 - Sep22)", "Insights shared by a family member could lead to possible ways to increase your income. Expect to handle a lot of paperwork regarding money, Virgo, but this is a positive development and definitely should leave you feeling good about your situation. This is a great day to do in-depth research. Your intuition is high and you're apt to see right through superficial appearances to the heart of any matter that interests you.");
    }else if(faceUp[0].src == 'http://www.astrology-zodiac-signs.com/images/scorpio.jpg' && faceUp[1].src == 'http://www.astrology-zodiac-signs.com/images/scorpio.jpg'){
      swal("Scorpio (Oct23 - Nov21)", "Home and family are apt to be your primary focus today, Scorpio. Work around the house might take up a lot of your time. You might want to spruce up the place and make it more beautiful. Gardening could be especially rewarding now. If you've wanted to try some recipes from a new cookbook, this is the day to do it. Your creative impulses regarding food are at an all-time high.");
    }else if(faceUp[0].src == 'http://www.astrology-zodiac-signs.com/images/capricorn.jpg' && faceUp[1].src == 'http://www.astrology-zodiac-signs.com/images/capricorn.jpg') {
      swal("Capricorn (Dec22 - Jan19)", "Volatile emotions may come to the surface among the members of your household today. This could prove irritating for you, Capricorn, but try to avoid becoming involved in others' quarrels. At times like this, a lot could be said that shouldn't be said, and apologies won't necessarily wipe it out. This is a great day to get some work done around the house, as your physical energy is high. Make use of your good aesthetic sense.");
    }else if(faceUp[0].src == 'http://www.astrology-zodiac-signs.com/images/pisces.jpg' && faceUp[1].src == 'http://www.astrology-zodiac-signs.com/images/pisces.jpg') {
      swal("Pisces (Feb19 - Mar20)", "A lost possession could be recovered today. A gift, either money or a long-desired item of some kind, could bring tears to your eyes, Pisces. Your sense of self-worth should be high at his time, and could cause you to feel nurturing towards everyone around you who doesn't have your self-confidence. New opportunities for increasing your income could come your way. Make the most of them.");
    }else if(faceUp[0].src == 'http://www.astrology-zodiac-signs.com/images/sagittarius.jpg' && faceUp[1].src== 'http://www.astrology-zodiac-signs.com/images/sagittarius.jpg') {
      swal("Sagittarius (Nov22 - Dec21)", "Today a strong sense of destiny could lead you to someone new - either a potential close friend or prospective romantic partner. You're apt to feel especially protective toward this person, Sagittarius, and even though he or she is new to you. You could feel as if you've known this person forever. Artistic activities benefit from increased intuition and physical and mental energy. Expect to shine! Enjoy your day.");
    }else if(faceUp[0].src =='http://www.astrology-zodiac-signs.com/images/cancer.jpg' && faceUp[1].src== 'http://www.astrology-zodiac-signs.com/images/cancer.jpg') {
      swal("Cancer (Jun21 - Jul22)", "Family members might want to get out in the world today, perhaps to attend a festival or rally. This is an excellent day to do this sort of thing, Cancer. You should be feeling especially energetic and enthusiastic, and you're likely to attract some interesting new people your way. Expect your mind to be stimulated by lectures or speeches given by public figures. Hop in the car, get out, and have some fun.");
    }else if(faceUp[0].src == 'http://www.astrology-zodiac-signs.com/images/taurus.jpg' && faceUp[1].src == 'http://www.astrology-zodiac-signs.com/images/taurus.jpg'){
      swal("Taurus (Apr20 - May20)", "Today you might feel as if you're walking around in a daze, Taurus, but it's a good daze. Your imagination and artistic abilities are sharp. Your intuition is especially attuned, and the thoughts and feelings of others are more apparent to you than they realize. You might feel unusually restless at some point and consider going for a workout, or at least a walk. Do it. Get those endorphins flowing.");
    }

    // If statement for the winning message.
  if (matched.length === 24) {
     console.log('You are finshed!');
     setTimeout (function() {
          swal("Congratulations on winning " + userName +"!" + " Have a positive, prductive and relaxful day.");
        }, 4000);

  }
};
// Where we reset the game
$('#resetBtn').on('click', function(){
  location.reload();
})



});
