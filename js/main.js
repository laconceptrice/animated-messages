"use strict";

// FUNCTIONS /////////////////////////////////////////

function setupAnimation()
{
  var messageAlphabet = new MessageAlphabet(message);
  var hiddenMessage   = new HiddenMessage(message);

  messageAlphabet.write("#characters");
  hiddenMessage.write("#phrase");
  
  // maintain height at init height throughout run
  var initHeight = $("#characters").height();
  $("#characters").height(initHeight);
}


function onMouseoverAnimate(event)
{
  var character = event.currentTarget;
  var fontSize  = parseInt($(character).css('font-size'));
  var countdown = $(".countdown").length;
    
  if(countdown > 0)
  {
    if(fontSize<=26)
    {
      $(character).fadeOut();
      
    }
    else 
    {
      // animate falling letter
      $(character).animate({"transform":"translate(0px,100px)"})
       
      // reduce size
      $(character).css('font-size', fontSize-10);
    }
    
    // unhide message letter
    onMouseoverWrite(character);
  }
  // else
  // {
  //   sendMessage();
  // }
}


function onMouseoverWrite(character)
{
  // find first occurence of character as class in #phrase 
  var hoveredCharacter = $(character).text();
  var firstOccurence   = $("#phrase ." + hoveredCharacter + ":first");
  
  // unhide
  $(firstOccurence).css('visibility', 'visible');
  
  // remove countdown and character classes so will not be found again
  $(firstOccurence).removeClass("countdown " + hoveredCharacter);
}



// function sendMessage()
// {
//   $("#characters").hide();
//   $("#sendmessage").show();
// }


// ON READY /////////////////////////////////////////


$(document).ready(function()
{
  setupAnimation();
  
  $("#characters span").on("mouseover", onMouseoverAnimate);

  // var detectNoActivity = new DetectNoActivity(1500);
  
  // if(detectNoActivity.noActivity == true)
  // {
  //   runCV();
  // }
});
