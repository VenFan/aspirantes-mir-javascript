function calcularColor(num) { //añadir el argumento
    var color;
    if (num === 1) {
        color = "negro"; //cambiar el valor por negro
    } else if(num === 2) { // estricta igualdad ===
        color = "blanco"; //reemplazar los : por ;
    } else if (num === 3) {
        color = "azul"; // cambiar el valor por azul
    } else {
        color = "verde"; //reemplazar : por =
    }
    return "El color es " + color;
}

// código de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"