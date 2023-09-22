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


body.style.backgroundImage = 'url("media/images/c0.png")';

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
                artist.innerHTML = songName0[1];
                song.innerHTML = songName0[0];
                body.style.backgroundImage = `url("media/images/c${0}.png")`;
                songImg.src = `media/images/c${0}.png`;
                audio[0].classList.add('plaing')
                audio[0].currentTime = 0;
                play(audio[0]);
                return;
            }else{
                artist.innerHTML = songs[(i+1)][1];
                song.innerHTML = songs[(i+1)][0];
                body.style.backgroundImage = `url("media/images/c${i+1}.png")`;
                songImg.src = `media/images/c${i+1}.png`;
                audio[i+1].classList.add('plaing')
                audio[i+1].currentTime = 0;
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
                artist.innerHTML = songs[(audio.length - 1)][1];
                song.innerHTML = songs[(audio.length - 1)][0];
                body.style.backgroundImage = `url("media/images/c${(audio.length - 1)}.png")`;
                songImg.src = `media/images/c${(audio.length - 1)}.png`;
                audio[(audio.length - 1)].classList.add('plaing')
                audio[(audio.length - 1)].currentTime = 0;
                play(audio[(audio.length - 1)]);
                return;
            }else{
                artist.innerHTML = songs[(i - 1)][1];
                song.innerHTML = songs[(i - 1)][0];
                body.style.backgroundImage = `url("media/images/c${(i - 1)}.png")`;
                songImg.src = `media/images/c${(i - 1)}.png`;
                audio[i-1].classList.add('plaing')
                audio[i - 1].currentTime = 0;
                play(audio[i-1]);
                return;
            }
        }
    }
});





