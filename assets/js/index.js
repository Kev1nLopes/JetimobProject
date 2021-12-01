let c = (el) => document.querySelector(el);
let cs = (el) => document.querySelectorAll(el);
let burger = c('.burger');
let mobileX = c('.mobile-x');
let btns = cs('[data-key]');
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
    lines[0].style.transform = "rotate(130deg)";
    lines[1].style.transform = "rotate(-130deg)";
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
function changeContent(item){
    let data = item.getAttribute('[data-key]');
    console.log(data);
    if(data == '0'){
        c('.location-column').style.display = 'none';
    
        cs('.column-crm').forEach(i =>{
            i.style.display = 'block';
        })
    }else if(data == '1'){
        cs('column-crm').forEach(item =>{
            item.style.display = 'none'
        })
        cs('.location-column').forEach(item =>{
            item.style.display = 'block';
           
        })
    }

}

function changePlan(item){
        if(!item.classList.contains('selected')){
            c('.selected[data-key]').classList.remove('selected');
            item.classList.add('selected');
            changeContent(item);
        }


    
    
}

burger.addEventListener('click', () => { menuBar() });
mobileX.addEventListener('click', () => { closeMenuBar() });
btns.forEach(item =>{
    item.addEventListener('click', ()=>{ changePlan(item) });
})






//<element>.offsetTop retorna a distancia do elemento ao topo
//window.pageyoffset retorna a altura de toda a tela