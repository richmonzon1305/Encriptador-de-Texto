const textArea = document.querySelector(".campo-texto");
const mensaje = document.querySelector(".mensaje");
const copiarButton = document.getElementById('ButtonCopiar')

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

    function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        
    }


    function encriptar(stringEncriptada){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase()

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
        
        return stringEncriptada;
        
}

    function  limpiarEncriptar(){
    let valorEncriptado = document.querySelector()
    valorEncriptado.value = '';
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}


function desencriptar(stringDesncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesncriptada.includes(matrizCodigo[i][1])){
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesncriptada
}

function copyText() {
    const resultElement = document.getElementById('mensaje-para-copiar');
    resultElement.select();
    resultElement.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Deselecciona el texto
    resultElement.setSelectionRange(0, 0);

    if (resultElement.value.trim() === '') {
        alert("Ooops! No hay texto que copiar.", "warning");
    } else {
        alert("Texto Copiado");
    }
    
}