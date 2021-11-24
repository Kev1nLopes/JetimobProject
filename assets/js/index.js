let c = (el)=>document.querySelector(el);
let cs = (el)=>document.querySelectorAll(el);

const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
} 

const target = cs('[data-anime]');
const animateClass = 'animate';

window.addEventListener('scroll', ()=>{ debounce(animeScroll(), 200)});


function animeScroll(){
    const windowTop = window.scrollY + 50;
    target.forEach((el)=>{
        if((windowTop) > el.offsetTop){
            el.classList.add(animateClass);
        }else{
            el.classList.remove(animateClass);
        }
    })
}

window.onload(animeScroll())


//<element>.offsetTop retorna a distancia do elemento ao topo
//window.pageyoffset retorna a altura de toda a tela