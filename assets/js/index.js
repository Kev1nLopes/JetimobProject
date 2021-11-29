let c = (el) => document.querySelector(el);
let cs = (el) => document.querySelectorAll(el);
let aux = false;

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
    let mobileMenu = c('.mobile-menu');
    let lines = cs('.mobile-x .line');
    mobileMenu.style.opacity = 1;
    mobileMenu.style.width = '100%';
    mobileMenu.style.zIndex = "1";
    lines[0].style.transform = "rotate(50deg)";
    lines[1].style.transform = "rotate(-50deg)";
}

function closeMenuBar() {
    let mobileMenu = c('.mobile-menu');
    let lines = cs('.mobile-x .line');
    mobileMenu.style.opacity = 0;
    mobileMenu.style.width = '0%';
    mobileMenu.style.zIndex = "1";
    lines[0].style.transform = "rotate(0deg)";
    lines[1].style.transform = "rotate(0deg)";
}

let burger = c('.burger');
let mobileX = c('.mobile-x');
burger.addEventListener('click', () => { menuBar() });
mobileX.addEventListener('click', () => { closeMenuBar() });





//<element>.offsetTop retorna a distancia do elemento ao topo
//window.pageyoffset retorna a altura de toda a tela