
(function(window){
	var helloSpeaker ={speak};
    var speakWord = "Hello";
    function speak(name) {
    console.log(speakWord + " " + name);
}
    window.helloSpeaker=helloSpeaker;
})(window);
