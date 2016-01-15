/**
 * Created by marcs on 14-1-2016.
 */

var POSITIONS = new Array(new CSSClass("bigger", 16000), new CSSClass("smaller", 16000));




function onLoaded(){
    console.log("Window Loaded!");
    counter = document.getElementById("counter");
    image = document.getElementById("afbeelding");
    image.src = imageSrc;
    onAnimationStart();
    initAudio();
    window.setTimeout(onNextSecond, 1000 );
    gabifyConsole();


};

console.log("Loaded Base.JS!");
