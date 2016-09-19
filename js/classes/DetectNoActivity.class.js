"use strict";

// not currently working

// detects when user has stopped interacting with page

var DetectNoActivity = function(waitTime)
{
  this.time  = null;

  // these all run immediately then never again... to fix
  window.onload        = this.resetTimer(waitTime);
  document.onmousemove = this.resetTimer(waitTime);
  document.onkeypress  = this.resetTimer(waitTime);
};


DetectNoActivity.prototype.noActivity = function()
{
  console.log("return no activity now");
  return true;
};

DetectNoActivity.prototype.resetTimer = function(waitTime)
{
  console.log("reset timer");

  clearTimeout(this.time);
  this.time = setTimeout(this.noActivity, waitTime); 
};

