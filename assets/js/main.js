function timerRelogio(){
function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio')
let segundos = 0;
let timer;
let p = document.querySelector('.P')

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos)
    }, 1000)
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        p.style.background= 'lightblue'
        p.style.borderRadius= '5px'
        p.style.color= 'black'
        p.style.padding = '10px'
        p.style.fontWeight = 'bold'  
        clearInterval(timer)
        iniciaRelogio()
        relogio.classList.remove('pausado')
        p.innerHTML = 'Você Iniciou o timer'
    }
    if (el.classList.contains('pausar')) {
        p.style.background= 'red'
        p.style.borderRadius= '5px'
        p.style.color= 'white'
        p.style.padding = '10px'
        p.style.fontWeight = 'bold'
        clearInterval(timer)
        relogio.classList.add('pausado')
        p.innerHTML = 'Você pausou o timer'

    }
    if (el.classList.contains('zerar')) {
        p.style.background= 'black'
        p.style.borderRadius= '5px'
        p.style.color= 'white'
        p.style.padding = '10px'
        p.style.fontWeight = 'bold'
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0;
        relogio.classList.remove('pausado')
        p.innerHTML = 'Você zerou o timer'
        

    }
})


}

timerRelogio()