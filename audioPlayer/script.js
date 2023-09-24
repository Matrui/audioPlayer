console.log("Mobile 414x896px  Oценка за задание 60 баллов");

let audio = document.querySelectorAll('.audio');

let playImg = document.querySelector('.pause');
let songImg = document.querySelector('.cover');
let body = document.body;

let playBtn = document.querySelector('.play-btn');
let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');

let artist = document.querySelector('h4');
let song = document.querySelector('h3');

let songName0 = ["Don't Hurt Yourself", "Beyonce"];
let songName1 = ["Don't Start Now", "Dua Lipa"];
let songs = [songName0, songName1];

let currentTiming = document.querySelector('.current');
let songLength = document.querySelector('.song-length');


body.style.backgroundImage = 'url("media/images/c0.png")';

function timeToSec(song){
    let min = Math.floor(song.duration / 60);
    let sec = Math.floor(song.duration % 60);
    if(sec<10){
        sec = '0'+ Math.floor(song.duration % 60);
    }
    return `${min}:${sec}`;
};

function currentTimeToSec(song){
    let min = Math.floor(song.currentTime / 60);
    let sec = Math.floor(song.currentTime % 60);
    if(sec<10){
        sec = '0'+ Math.floor(song.currentTime % 60);
    }
    return `${min}:${sec}`;
};

function currentDuration(songNumber){

    audio[songNumber].addEventListener( "loadeddata", () => {
        songLength.textContent = timeToSec(audio[songNumber]);
        currentTiming.textContent = currentTimeToSec(audio[songNumber]);
        },
    );

    songLength.textContent = timeToSec(audio[songNumber]);

    audio[songNumber].addEventListener( "timeupdate", () => {
        currentTiming.textContent = currentTimeToSec(audio[songNumber]);
        let width = (audio[songNumber].currentTime / audio[songNumber].duration) * 100;
        document.querySelector('.progress').style.width = `${width}%`;
        console.log(width);
    });

    artist.innerHTML = songs[(songNumber)][1];
    song.innerHTML = songs[(songNumber)][0];
    body.style.backgroundImage = `url("media/images/c${songNumber}.png")`;
    songImg.src = `media/images/c${songNumber}.png`;
    audio[songNumber].classList.add('plaing')
    audio[songNumber].currentTime = 0;

};

currentDuration(0);

function timeLine(time){
    for(let i = 0; i < audio.length; i++){
    if(audio[i].classList.contains('plaing')){
        let currentWidth = this.clientWidth;
        let userClick = time.offsetX;
        const duration = audio[i].duration;
        audio[i].currentTime = (userClick/currentWidth) * duration;
        if(audio[i].paused){
            play(audio[i]);
        }
    };
    };
}

document.querySelector('.song-line').addEventListener("click", timeLine);

function play(element){
    if(element.paused){
        element.play();
        playImg.src = "media/svg/2pause.svg"
        // songImg.style.transform = 'scale(1.3)';
    } else{
        element.pause();
        playImg.src = "media/svg/2play.svg"
    }
};

playBtn.addEventListener("click", () => {
    for(let i = 0; i < audio.length; i++){
        if(audio[i].classList.contains('plaing')){
            songImg.src = `media/images/c${i}.png`;
            songImg.sty
            play(audio[i]);
            return;
        }
    }
})


rightBtn.addEventListener("click", () => {
    for(let i = 0; i < audio.length; i++){
        if(audio[i].classList.contains('plaing')){
            if(!audio[i].paused){
                audio[i].currentTime = 0;
                play(audio[i]);
            }
            audio[i].classList.remove('plaing')
            if(i === (audio.length - 1)){
                currentDuration(0);
                play(audio[0]);
                return;
            }else{
                currentDuration(i+1);
                play(audio[i+1]);
                return;
            }
        }
    }
});

leftBtn.addEventListener("click", () => {
    for(let i = 0; i < audio.length; i++){
        if(audio[i].classList.contains('plaing')){
            if(!audio[i].paused){
                audio[i].currentTime = 0;
                play(audio[i]);
            }
            audio[i].classList.remove('plaing')
            if(i === 0){
                currentDuration((audio.length - 1));
                play(audio[(audio.length - 1)]);
                return;
            }else{
                currentDuration(i - 1);
                play(audio[i-1]);
                return;
            }
        }
    }
});





