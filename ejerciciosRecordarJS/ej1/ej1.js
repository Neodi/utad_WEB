const multiplica = () => {
    let n1 = +prompt("Escribe numero 1: ");
    let n2 = +prompt("Escribe numero 2: ");
    alert("Resultado multiplicación: "+ n1*n2);
}

const comparar = () => {
    let n1 = +prompt("Escribe numero 1: ");
    let n2 = +prompt("Escribe numero 2: ");
    if(n1>n2){
        alert(n1 + " mayor que " + n2);
    }else{
        alert(n1 + " menor que " + n2);
    }
    
}



let oppcion = +prompt("elige \n 1.Multiplicación \n 2.Mayor \n 3.Encabezado");


switch (oppcion) {
    case 1:
        alert("Has elegido la opcion " + oppcion );
        multiplica();
        break;

    case 2:
        alert("Has elegido la opcion " + oppcion );
        comparar();
        break;
    
    case 2:
        alert("Has elegido la opcion " + oppcion );

        break;
    default:
        alert("No has elegido ninguna opcion válida");

        break;
}