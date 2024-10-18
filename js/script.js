document.addEventListener("DOMContentLoaded" , ()=> {

    const slideImg = document.querySelectorAll('#slide img');

    let t = 2;
    const fadeSlide = ()=> {    

        const x =()=> {
            slideImg.forEach( z => z.style.opacity = 1);
            t= 2;
        }
        const y = ()=> {
            slideImg[t].style.opacity = 0;
            t--;
        }
        //삼항연산자
        ( t == 0 ) ?  x() : y();        
       
    }

    setInterval( fadeSlide , 2000);

    /*****************************/
    const ul_a = document.querySelectorAll("#notice ul a");
    const popup = document.getElementById("popup");

    ul_a.forEach( i => {
        i.addEventListener("click" , ()=> {
            popup.style.display = "block";
        });
    });

    popup.querySelector("button").addEventListener("click" , ()=> {
        popup.style.display = "none";
    });

});//end.............