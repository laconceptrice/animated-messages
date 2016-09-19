"use strict";

// writes a string to document as individual taregettable characters

var HiddenMessage = function(message)
{
  this.message = message.split("");
};


HiddenMessage.prototype.write = function(writeHere)
{
  for(var i=0; i<this.message.length; i++)
  {
    $("<div>").text(this.message[i]).addClass("countdown "+this.message[i]).appendTo(writeHere).css('visibility', 'hidden');
  }
};
