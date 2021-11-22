let c = (el)=>document.querySelector(el);
let cs = (el)=>document.querySelectorAll(el);


function createElement(el){
    return document.createElement(el);
}

function append(ft, el){
    //ft = father
    ft.appendChild(el);
}


//<element>.offsetTop retorna a distancia do elemento ao topo
//window.pageyoffset retorna a altura de toda a tela