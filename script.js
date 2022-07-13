var mario = document.getElementById("mario");
var tube = document.getElementById("tube");
var counter=0;
function jump(){
    if(mario.classList == "animate"){return}
    mario.classList.add("animate");
    setTimeout(function(){
        mario.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let tubeLeft = parseInt(window.getComputedStyle(tube).getPropertyValue("left"));
    if(tubeLeft<50 && tubeLeft>-50 && marioTop>=120){
        tube.style.animation = "none";
        confirm(`Você perdeu, sua pontuação foi ${+Math.floor(counter/100)}. Clique em Ok para tentar novamente`);
        counter=0;
        tube.style.animation = "tube 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);