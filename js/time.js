/**
 * Created by marcs on 14-1-2016.
 */


function Klasse(naam, time){
    this.time = time;
    this.naam = naam;
}
var POSITIONS = new Array(new Klasse("test", 1000), new Klasse("test", 1000));

function onTime(){
    var x = Math.floor(Math.random() * POSITIONS);
}

window.onload(new function(){
    window.setInterval(onTime, 1000);
});