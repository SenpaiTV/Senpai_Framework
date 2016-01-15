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
        var url = "https://www.youtube.com/embed/"+audioSrc+"?autoplay=1&loop=1&playlist="+audioPlaylist;
        doEmbed(url);
    }else if(audioType == 3){
        //TODO: Vimeo implementation.
    }else if(audioType == 4){
        //TODO: Vine implementation.
    }else if(audioType == 5){
        var url = "http://player.twitch.tv/?channel=" + audioSrc;
        doEmbed(url);
    }
}



var youtube;
function doEmbed(url){
    youtube = document.createElement("IFRAME");
    youtube.setAttribute("src", url);
    youtube.setAttribute("width", 0+"px");
    youtube.setAttribute("height", 0+"px");
    document.body.appendChild(youtube);
}


console.log("Loaded Audio.JS!");
