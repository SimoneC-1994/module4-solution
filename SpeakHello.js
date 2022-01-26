
(function(window){
	var helloSpeaker ={speak};
    var speakWord = "Hello";
    HelloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
}
    window.helloSpeaker=helloSpeaker;
})(window);
