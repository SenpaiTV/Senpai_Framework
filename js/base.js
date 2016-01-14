/**
 * Created by marcs on 14-1-2016.
 */

var POSITIONS = new Array(new CSSClass("bigger", 1000), new CSSClass("smaller", 1000));
var audio = new Audio(audioSrc);
function loopAudio(){
    audio.loop = true;
    audio.play();
}
function onLoaded(){
    counter = document.getElementById("counter");
    image = document.getElementById("afbeelding");

    onAnimationTime();

    window.setTimeout(onNextSecond, 1000 );
    console.log("Window Loaded!");
    loopAudio();
    gabifyConsole();


};