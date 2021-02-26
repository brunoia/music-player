//display time
function watch() {
    let data = new Date();
    let hour = data.getHours();
    let min = data.getMinutes();
       
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    
    let hours = hour + ":" + min;
    
    document.getElementById("time").value = hours;
}

let timer = setInterval(watch, 1000);


//progress bar
function updateProgressValue() {
    progressBar.max = currentSong.duration;
    progressBar.value = currentSong.currentTime;
    document.querySelector('.durationTime').innerHTML = formatTime(currentSong.duration);
    document.querySelector('.currentTime').innerHTML = formatTime(currentSong.currentTime);
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN" && document.querySelector('.currentTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "3:12";
        document.querySelector('.currentTime').innerHTML =  "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(currentSong.duration)));
        document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(currentSong.currentTime)));
    }
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(updateProgressValue, 500);

function changeProgressBar() {
    currentSong.currentTime = progressBar.value;
};


//show-n-hide play-n-pause btn
function hidebtn() {
    if(document.getElementById('play-btn').style.display == 'none' ) {  
        document.getElementById('play-btn').style.display = 'inline-block';  
        document.getElementById('pause-btn').style.display = 'none'; 
    }    
    else {  
        document.getElementById('play-btn').style.display = 'none';  
        document.getElementById('pause-btn').style.display = 'inline-block';  
    }     
}


//keep pause btn on when changing songs
function keepbtn() {
    if(document.getElementById('play-btn').style.display == 'inline-block' ) {  
        document.getElementById('play-btn').style.display = 'none';  
        document.getElementById('pause-btn').style.display = 'inline-block'; 
    }
}


//songs
let currentSong = '';
const audio01 = document.getElementById('track01');
const audio02 = document.getElementById('track02');
const audio03 = document.getElementById('track03');


//controls
function play() {
    if ( currentSong == '' ) {
        currentSong = audio01;
    } else {
        currentSong = currentSong;
    }

    currentSong.play();
    displayNames();
}

function pause() {
    currentSong.pause();
}

function backward() {
    currentSong.currentTime -= 5;
}

function forward() {
    currentSong.currentTime += 5;
}

function nextSong() {
    if ( currentSong == audio01 ) {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSong = audio02;    
    } else if ( currentSong == audio02 ) {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSong = audio03;    
    } else {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSong = audio01;
    }

    currentSong.play();
    displayNames();
}

function previousSong() {
    if ( currentSong == audio01 ) {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSong = audio03;    
    } else if ( currentSong == audio02 ) {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSong = audio01;    
    } else {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSong = audio02;
    }

    currentSong.play();
    displayNames();
}


//songs arrays to display names
const song01 = { songTitle: 'Make Love Not War', artist: 'Patiño'};
const song02 = { songTitle: 'She No Dull Beat', artist: 'Nana Kwabena'};
const song03 = { songTitle: 'Jah Jah Bangs', artist: 'Quincas Moreira'};


//display song title n artist name
function displayNames() {
    if ( currentSong == audio01 ) {
        document.getElementById('song-title').innerHTML = song01.songTitle;
        document.getElementById('artist').innerHTML = song01.artist;
    } else if ( currentSong == audio02 ) {
        document.getElementById('song-title').innerHTML = song02.songTitle;
        document.getElementById('artist').innerHTML = song02.artist;
    } else {
        document.getElementById('song-title').innerHTML = song03.songTitle;
        document.getElementById('artist').innerHTML = song03.artist;
    }
}


//play next song when current is over
audio01.addEventListener('ended', function(){
    nextSong();
});

audio02.addEventListener('ended', function(){
    nextSong();
});

audio03.addEventListener('ended', function(){
    nextSong();
});