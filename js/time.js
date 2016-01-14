/**
 * Created by marcs on 14-1-2016.
 */


var x;
var css;

function onTime(){
    x = Math.floor(Math.random() * POSITIONS.length);
    css = POSITIONS[x];
    document.getElementById("afbeelding").className = css.naam;
    window.setTimeout(onTime, css.tijd);
}
