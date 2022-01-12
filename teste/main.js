const front = document.querySelectorAll('.b_front');
const back = document.querySelectorAll('.b_back');

front.forEach(item => {
    item.addEventListener('click', event => {
        const ft = event.target.parentElement.parentElement;
        ft.classList.toggle('flipped')
        const btn_front = document.querySelector("#frt");
        if(btn_front.style.pointerEvents === "none") {
            btn_front.style.pointerEvents = "auto";
        }else{
            btn_front.style.pointerEvents = "none";
        }
    })
})
back.forEach(item => {
    item.addEventListener('click', event => {
        const bk = event.target.parentElement.parentElement.parentElement;
        bk.classList.toggle('flipped')
        const btn_front = document.querySelector("#frt");
        if(btn_front.style.pointerEvents === "auto") {
            btn_front.style.pointerEvents = "none";
        }else{
            btn_front.style.pointerEvents = "auto";
        }
    })
})

