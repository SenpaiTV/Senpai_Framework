/**
 * Created by marcs on 14-1-2016.
 */


var x;
var y;
var css;


var counter;
var image;
function onAnimationTime(){
    do{
        x = Math.floor(Math.random() * POSITIONS.length);
    }while(x == y);
    y = x;

    css = POSITIONS[x];
    image.className = css.naam;
}
function onAnimationLoop(){
    onAnimationTime();
    window.setTimeout(onAnimationLoop, css.tijd);
}

function onAnimationStart(){
    onAnimationTime();
    window.setTimeout(onAnimationLoop, 2000);
}


var secs = 0;
function onNextSecond(){
    secs++;
    counter.innerHTML = "You have been worshipping for " + secs + " seconds.";
    window.setTimeout(onNextSecond, 1000);
}

console.log("Loaded Time.JS!");
