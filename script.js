let variableGlobal = 0;

function cambio(imagen, h3, p1, p2){
    document.getElementById('cartaFija').querySelector('img').src = imagen;
    document.getElementById('cartaFija').querySelector('h3').textContent = h3;
    document.getElementById('cartaFija').getElementsByTagName('p')[0].innerText = p1;
    document.getElementById('cartaFija').getElementsByTagName('p')[1].innerText = p2;
    document.getElementById('cartaFija').getElementsByTagName('p')[1].style.visibility = "visible";
    document.getElementById('cartaFija').getElementsByTagName('p')[1].style.color = "white";
}

function esconder(){
    document.getElementById("cartaFija").style.visibility = "hidden";
    variableGlobal= 0;
    document.getElementById('cartaFija').getElementsByTagName('p')[1].style.visibility = "hidden";
}


function funcion1() {
    if (variableGlobal === 1) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 1;
        const imagen = document.getElementById("imgUno").getAttribute("src");
        const h3 = document.getElementById('uno').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('uno').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('uno').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }

}


function funcion2(){
    if (variableGlobal === 2) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 2;
        const imagen = document.getElementById("imgDos").getAttribute("src");
        const h3 = document.getElementById('dos').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('dos').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('dos').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}

function funcion3(){
    if (variableGlobal === 3) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 3;
        const imagen = document.getElementById("imgTres").getAttribute("src");
        const h3 = document.getElementById('tres').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('tres').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('tres').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}

function funcion4(){
    if (variableGlobal === 4) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 4;
        const imagen = document.getElementById("imgCuatro").getAttribute("src");
        const h3 = document.getElementById('cuatro').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('cuatro').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('cuatro').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}

function funcion5(){
    if (variableGlobal === 5) esconder();
        else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 5;
        const imagen = document.getElementById("imgCinco").getAttribute("src");
        const h3 = document.getElementById('cinco').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('cinco').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('cinco').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}

function funcion6(){
    if (variableGlobal === 6) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 6;
        const imagen = document.getElementById("imgSeis").getAttribute("src");
        const h3 = document.getElementById('seis').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('seis').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('seis').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}

function funcion7(){
    if (variableGlobal === 7) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 7;
        const imagen = document.getElementById("imgSiete").getAttribute("src");
        const h3 = document.getElementById('siete').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('siete').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('siete').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}

function funcion8(){
    if (variableGlobal === 8) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 8;
        const imagen = document.getElementById("imgOcho").getAttribute("src");
        const h3 = document.getElementById('ocho').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('ocho').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('ocho').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}

function funcion9(){
    if (variableGlobal === 9) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 9;
        const imagen = document.getElementById("imgNueve").getAttribute("src");
        const h3 = document.getElementById('nueve').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('nueve').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('nueve').getElementsByTagName('p')[1].innerText;
        

        cambio(imagen, h3, p1, p2);
    }
}

function funcion10(){
    if (variableGlobal === 10) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 10;
        const imagen = document.getElementById("imgDiez").getAttribute("src");
        const h3 = document.getElementById('diez').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('diez').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('diez').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
        
    }
}

function funcion11(){
    if (variableGlobal === 11) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 11;
        const imagen = document.getElementById("imgOnce").getAttribute("src");
        const h3 = document.getElementById('once').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('once').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('once').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}

function funcion12(){
    if (variableGlobal === 12) esconder();
    else {
        document.getElementById("cartaFija").style.visibility = "visible";
        variableGlobal = 12;
        const imagen = document.getElementById("imgDoce").getAttribute("src");
        const h3 = document.getElementById('doce').getElementsByTagName('h3')[0].innerText;
        const p1 = document.getElementById('doce').getElementsByTagName('p')[0].innerText;
        const p2 = document.getElementById('doce').getElementsByTagName('p')[1].innerText;

        cambio(imagen, h3, p1, p2);
    }
}



document.getElementById('uno').addEventListener('click', funcion1);
document.getElementById('dos').addEventListener('click', funcion2);
document.getElementById('tres').addEventListener('click', funcion3);
document.getElementById('cuatro').addEventListener('click', funcion4);
document.getElementById('cinco').addEventListener('click', funcion5);
document.getElementById('seis').addEventListener('click', funcion6);
document.getElementById('siete').addEventListener('click', funcion7);
document.getElementById('ocho').addEventListener('click', funcion8);
document.getElementById('nueve').addEventListener('click', funcion9);
document.getElementById('diez').addEventListener('click', funcion10);
document.getElementById('once').addEventListener('click', funcion11);
document.getElementById('doce').addEventListener('click', funcion12);


