var fotos = ["cigale.jpeg", "gang1.jpeg", "gang2.jpeg","gang3.jpeg"]
let tam = fotos.length;
let cont = 0;
const prev = () => {
    
    cont--;
    if(cont<0){
        cont= tam-1;
    }

    document.getElementById("imagen").src = fotos[cont];
}


const next = () => {

    cont++;
    if(cont>=tam){
        cont= 0;
    }
    document.getElementById("imagen").src = fotos[cont];
}