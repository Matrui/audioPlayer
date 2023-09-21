let audio = document.querySelectorAll('.audio');

let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');


console.log(audio);

audio.forEach(function(element){
    playBtn.addEventListener("click", () => {
        if(element.classList.contains('plaing')){
            play(element);
        };
    });
    pauseBtn.addEventListener("click", () => {
        if(element.classList.contains('plaing')){
            play(element);
        };
    });
})



function play(element){
    if(element.paused){
        element.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline-block";
    } else{
        element.pause();
        playBtn.style.display = "inline-block";
        pauseBtn.style.display = "none";
    }
};
