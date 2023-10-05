alert(document.getElementById("Triangulo").value);

function calcularArea() {

    let area = 0;

    
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    

    if(document.getElementById("Triangulo").checked === true ){
        alert("triangulo")
        area = (base*altura)/2;
        resultado.value = area;
    }else if(document.getElementById("Cuadrado").value === true){
        alert("cuadrado")
        area = (base*altura);
        resultado.value = area;
    }else{
        alert("elige una opcion");
    }

}

function borrar() {
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").value = "";
    Document.getElementById("Cuadrado").value = false;
    document.getElementById("Triangulo").value = false;
}