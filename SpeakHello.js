
(function(window){
	var HelloSpeaker ={};
    var speakWord = "Hello";
    HelloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
}
    window.helloSpeaker=helloSpeaker;
})(window);
