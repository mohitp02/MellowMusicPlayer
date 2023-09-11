console.log("Welcome to MellowMusic");
let m1=new Audio("./1.mp3");
// m1.play();
let songIndex=0;
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songName=document.getElementsByClassName("text");
let songInfo=document.getElementsByClassName("songInfo");

// let songs=[{songName:"Dil Jhoom",FilePath:"",fileCover:""},
// {songName:"Dil Jhoom",FilePath:"",fileCover:""},
// {songName:"Dil Jhoom",FilePath:"",fileCover:""},
// {songName:"Dil Jhoom",FilePath:"",fileCover:""},
// {songName:"Dil Jhoom",FilePath:"",fileCover:""},
// {songName:"Dil Jhoom",FilePath:"",fileCover:""}]



m1.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    progress=parseInt((m1.currentTime/m1.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    m1.currentTime=(myProgressBar.value*m1.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("fa-regular")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
}
)}

Array.from(document.getElementsByClassName("fa-regular")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        const ind=parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        m1.src=`./${ind}.mp3`
        m1.currentTime=0;
        m1.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    })
})
Array.from(document.getElementsByClassName("fa-regular")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        // let ind=parseInt(e.target.id);
masterPlay.addEventListener("click",()=>{
    if(m1.paused || m1.currentTime<=0){
        m1.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
        e.target.classList.add("fa-circle-pause");
        e.target.classList.remove("fa-circle-play");
    }
    else{
        m1.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity=0;
        makeAllPlays();
    }
    
})

})
})

var join=document.getElementsByClassName(".text");
console.log(join);
for(let i=1;i<join.length;i++){
    
    document.getElementsByClassName(".text")[i].addEventListener("click",()=>{
        m1.src=`./${i}.mp3`  
        m1.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
        e.target.classList.add("fa-circle-pause");
        e.target.classList.remove("fa-circle-play");
    })
}


const her=document.getElementById("next");
her.addEventListener("click",()=>{
    if(songIndex>6){
        songIndex=0;
    }
    else
    {
        songIndex +=1;
    }
    m1.src=`./${songIndex}.mp3`  
    m1.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity=1;
   
})

const hero=document.getElementById("prev");
hero.addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=6;
    }
    else
    {
        songIndex -=1;
    }
    m1.src=`./${songIndex}.mp3`  
    m1.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity=1;

})