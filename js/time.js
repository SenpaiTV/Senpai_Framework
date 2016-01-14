/**
 * Created by marcs on 14-1-2016.
 */
var POSITIONS = 2;

function onTime(){
    var x = Math.floor(Math.random() * POSITIONS);
}
window.onload(new function(){
    window.setInterval(onTime, 1000);
});