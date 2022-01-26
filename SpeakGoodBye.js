
(function(window){
	var byeSpeaker ={speak};
	var speakWord = "Good Bye";
	GobyeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
}
  window.byeSpeaker=byeSpeaker;

})(window);