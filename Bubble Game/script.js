let timer = 10;
let score = 0;
let hitrn = 0;
function makeBubble(){
    let clutter="";
for(let i=1;i<=168;i++){
    let rn=Math.floor(Math.random()*10);
    clutter+=`<div id="bubble">${rn}</div>`;
}
document.querySelector('#pbtm').innerHTML=clutter;
}
function runTimer(){
    let timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('.timerval').textContent=timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000)
}
function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector('.hitval').textContent = hitrn;
}
function increaseScore(){
    score+=10;
    document.querySelector('.scoreval').textContent=score;
}
function logic(){
    document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    let clickedNum = (Number(dets.target.textContent));
    if(hitrn === clickedNum){
        increaseScore();
        makeBubble();
getNewHit();
    }
})
}
runTimer();
makeBubble();
getNewHit();
logic();
let con =document.querySelector("#main");
con.addEventListener('dblclick' ,function(){
    console.log("Chall raha hai ")
});