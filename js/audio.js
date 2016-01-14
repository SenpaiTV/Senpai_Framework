/**
 * Created by Marc Sollie on 14-1-2016.
 */



var audio;
function loopAudio(){
    audio = new Audio(audioSrc);
    audio.loop = true;
    audio.play();
}


function initAudio(){
    console.log("Audiotype: "+audioType);
    if(audioType == 0){
        return;
    }else if(audioType == 1){
        loopAudio();
    }else if(audioType == 2){
        var url = "http://www.youtube.com/v/"+audioSrc+"?version=3&loop=1&playlist=,";
        //TODO: Youtube werkend maken.
    }else if(audioType == 3){
        //TODO: Vimeo implementation.
    }else if(audioType == 4){
        //TODO: Vine implementation.
    }
}

console.log("Loaded Audio.JS!");
