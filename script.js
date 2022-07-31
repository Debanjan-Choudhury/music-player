let play = document.getElementById("play");
let previous = document.getElementById("previous");
let next = document.getElementById("next");


let music = document.getElementById("audio");
let music_name = document.querySelector (".music_name");
let artist_name = document.querySelector (".artist_name");
let disc = document.querySelector (".disc");
let slider = document.querySelector (".slider");



let verify= 'false';
let songIndex = 0;
let status = 'false'

function play_music() {
    console.log("hello");
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    verify = 'true';

}

const pause_music = ()=>{
    console.log("hello"); 
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    verify = 'false';

}

play.addEventListener("click",()=>{
    if(verify === 'false'){
        play_music();
    }
    else{
        pause_music();
    }
})

const load_music = ()=>{
    
    music_name.textContent = songs[songIndex].name;
    artist_name.textContent = songs[songIndex].artist;
    music.src = songs[songIndex].path;
    disc.style.backgroundImage =`url('${songs[songIndex].cover}')`

}

const next_music = ()=>{
    songIndex =(songIndex+1) % songs.length;
    load_music();
    if (verify == 'true'){
        music.play();
    }
    else{
        music.pause();
    }
    
}

const previous_music = ()=>{
    songIndex =(songIndex-1 + songs.length) % songs.length;
    load_music();
    if (verify == 'true'){
        music.play();
    }
    else{
        music.pause();
    }

}

setInterval(()=>{
    slider.value = music.currentTime;
    currentTime.innerHTML = formateTime(music.currentTime);

},500);

slider.addEventListener('change',()=>{
    music.currentTime=slider.value;
})


next.addEventListener("click",next_music);
    // music_name.textContent = songs[1].name;

previous.addEventListener("click",previous_music);    










