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
    var date = Date();
    console.log("Audiotype: "+audioType);
    if(date.getMonth() == 3 && date.getDate() == 1){
        if(enableJoke){
            console.log("April's Fools!");
            doEmbed("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=,");
            return;
        }
    }

    if(audioType == 0){
        return;
    }else if(audioType == 1){
        loopAudio();
    }else if(audioType == 2){
        var url = "https://www.youtube.com/embed/"+audioSrc+"?autoplay=1&loop=1&playlist="+audioPlaylist;
        doEmbed(url);
    }else if(audioType == 3){
        var url = "https://player.vimeo.com/video/"+audioSrc+"?autoplay=1&loop=1";
        doEmbed(url);
    }else if(audioType == 4){
        var url = "https://vine.co/v/"+audioSrc+"/embed/simple?audio=1";
        doEmbed(url);
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
