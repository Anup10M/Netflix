
        const carousel=document.querySelector('.slide-images');
        firstimg = carousel.querySelectorAll(".box-images")[0]; 
        arrowIcon = document.querySelectorAll('.button-slide i');
        let isdragstar=false,prevPageX, prevscrollleft;

        let firstlmgwidth = firstimg.clientWidth + 14;
       
        arrowIcon.forEach(icon => {
            icon.addEventListener("click", () =>{
               carousel.scrollLeft += icon.id == "lf" ? -firstlmgwidth: firstlmgwidth
            })
        });
        const dragstar=(e) =>{
            isdragstar=true;
            prevPageX=e.pageX;
            prevscrollleft=carousel.scrollLeft;
        }
        document.querySelectorAll('.slide-images img').forEach(img => {
         img.addEventListener('dragstart', (e) => e.preventDefault());
        });


        const dragging= (e) => {
            if (!isdragstar) return;
            e.preventDefault();
            let positionDiff = e.pageX - prevPageX;
            carousel.scrollLeft=prevscrollleft - positionDiff;
        }   
        const dragstop = () => {
            isdragstar=false;
        }
        carousel.addEventListener('mousedown',dragstar);
        carousel.addEventListener("mousemove",dragging)
        carousel.addEventListener("mouseup",dragstop)


 let leftsearch=document.querySelector(".left-search");
 function bring() {
     leftsearch.classList.toggle("comeleft");
 }
    setTimeout(function() {
    document.getElementById("intro-video").style.display = "none";
}, 4400);


let backchange=document.querySelector(".intro");
let mvtitletop=document.querySelector("#title");
let mvtitlebot=document.querySelector("#title2");
let firstov=document.querySelector('#fimg');
let secov=document.querySelector('#fimg2');
let trov=document.querySelector("#fimg3");

if (backchange && mvtitletop && mvtitlebot) {
    function cyclebackgrund(){

setTimeout(function bgchange1(){
 backchange.classList.add("intro1");
 backchange.classList.remove("intro")
 backchange.classList.remove("intro2")
 mvtitletop.innerHTML = "Venom:"
 mvtitlebot.innerHTML = "Let There Be Carnage";
 firstov.src='seover.jpg';
 secov.src="seover2.jpg";
 trov.src='seover3.jpg'
}
,10000)

setTimeout(function bgchange2() {
    backchange.classList.add("intro2")
    backchange.classList.remove("intro1")
    backchange.classList.remove("intro")
    mvtitletop.innerHTML='Avengers:'
    mvtitlebot.innerHTML="Endgame"
     firstov.src='tr.jpg';
    secov.src="tr2.jpg";
    trov.src='tr3.jpg'
},15000)

setTimeout(function bgchange3(){
    backchange.classList.add('intro');
    backchange.classList.remove('intro1');
    backchange.classList.remove('intro2');
    mvtitletop.innerHTML='Spider-Man';
    mvtitlebot.innerHTML="Far From Home"
     firstov.src='over.jpg';
    secov.src="over2.jpg";
    trov.src='over3.jpg'
},20000)
}
cyclebackgrund();
setInterval(cyclebackgrund,20000);
}