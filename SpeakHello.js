
(function(window){
	var HelloSpeaker = new Object {};
    var speakWord = "Hello";
    HelloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
}
    window.helloSpeaker=helloSpeaker;
})(window);
