let c = (el) => document.querySelector(el);
let cs = (el) => document.querySelectorAll(el);

const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}


window.addEventListener('scroll', () => { debounce(animeScroll(), 200) });


function animeScroll() {
    const target = cs('[data-anime]');
    const animateClass = 'animate';
    const windowTop = window.innerHeight - 100;
    target.forEach((el) => {
        if ((windowTop) > el.getBoundingClientRect().top) {
            el.classList.add(animateClass);
        } else {
            el.classList.remove(animateClass)
        }
    })
}

function menuBar() {

}
let burger = c('.burger');
burger.addEventListener('click', menuBar)



window.onload(animeScroll())


//<element>.offsetTop retorna a distancia do elemento ao topo
//window.pageyoffset retorna a altura de toda a tela