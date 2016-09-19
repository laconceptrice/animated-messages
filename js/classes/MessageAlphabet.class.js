"use strict";

// generates arrays of unique characters and their frequency from a string

var MessageAlphabet = function(string)
{
  this.string     = string;
  this.characters = this.getCharactersFromString();
  this.counts     = this.generateCharacterCountArray();
};


MessageAlphabet.prototype.getCharactersFromString = function() 
{
  var allCharacters = this.string.split("");
  var uniqueCharacters = [];

  for(var i=0; i<allCharacters.length; i++)
  {
    var character = allCharacters[i];

    if(uniqueCharacters.indexOf(character) == -1)
    {
      uniqueCharacters.push(character);
    }
  }
  
  // remove tiret if my own message
  // uniqueCharacters.sort();
  // uniqueCharacters.shift();
  
  // randomise sequence of characters
  uniqueCharacters.shuffle();
  
  return uniqueCharacters;
};

MessageAlphabet.prototype.generateCharacterCountArray = function()
{
  var counts = [];

  for(var i=0; i<this.characters.length; i++)
  {
    var count = this.countCharacterInString(this.string, this.characters[i]);
    counts.push(count);
  }
  return counts;
};

MessageAlphabet.prototype.countCharacterInString = function(anyString, character)
{
  var regExp = new RegExp(character, "gi");
  var count  = anyString.match(regExp).length;

  return count;
};

MessageAlphabet.prototype.write = function(writeHere)
{
  for(var i=0; i<this.characters.length; i++)
  {
    $("<span>").text(this.characters[i]).css("fontSize", (16+parseInt(this.counts[i])*10)).appendTo(writeHere);
  }
};

