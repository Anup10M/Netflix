
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