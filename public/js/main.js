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
        const bk = event.target.parentElement.parentElement.parentElement.parentElement;
        bk.classList.toggle('flipped')
        const btn_front = document.querySelector("#frt");
        if(btn_front.style.pointerEvents === "auto") {
            btn_front.style.pointerEvents = "none";
        }else{
            btn_front.style.pointerEvents = "auto";
        }
    });
});

async function getContent() {
    try {
       const response = await fetch('http://localhost:5000/result')
       //console.log(response);
       const data = await response.json();
       show(data);
    } catch (error) {
        // console.log(error)
    }
}

getContent()

function show(lang) {
    let output = ''
    let output_ = ''
    for(let pt_br of Object.keys(lang)) {
        var languages = lang[pt_br];
        output += `${languages[0].Portuguese}`
        
        console.log(languages[0]);
    }
    document.querySelector('.back0').innerHTML = output

    for(let en_us of Object.keys(lang)) {
        var languages = lang[en_us];
        output_ += `${languages[0].English}`
        
        console.log(languages[0]);
    }
    document.querySelector('.back1').innerHTML = output_
}


async function openGrammar(){
    try {
        const respGrammar = await fetch('http://localhost:5000/grammar');
        const data  = await respGrammar.json();
        showGrammar(data);
    } catch (error) {
        // console.log(error)
    }
}

openGrammar()

function showGrammar(grammar) {
    let respGrammar = ''
    respGrammar += `${grammar[0]}`

    document.querySelector('.grammar').innerHTML = respGrammar
    
}