const textArea = document.querySelector("#txtInput");
const mensagem = document.getElementById("displayValue");
// const mensagem = document.querySelector("#displayValue");

let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o", "obet"], ["u", "ufat"]];
console.table(matrizCodigo);

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o", "obet"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada
}

// Decrypt text

function decryptBtn() {
    const decryptedText = decrypt(textArea.value);
    mensagem.value = decryptedText;
    textArea.value = "";
}

function decrypt(decryptString) {

    let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o", "obet"], ["u", "ufat"]];
    decryptString = decryptString.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(decryptString.includes(matrizCodigo[i][0])) {
            decryptString = decryptString.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return decryptString
}

// Hide Elements And Show Copy Button

function hideElemAndShowCopyBtn() {

    document.getElementById("displayValue").innerHTML = true;
    document.getElementById("resultCriptografia").style.justifyContent = "space-between";
    document.getElementById("displayValue").style.display = "block";
    document.getElementById("indicator").style.display = "none";
    document.getElementById("tip").style.display = "none";
    document.getElementById("exclamIcon2").style.display = "none";  

    const copyButton = document.querySelector('.botao__copiar'); 
    copyButton.style.display = 'block';
    copyButton.addEventListener('click', hideElemAndShowCopyBtn); 
}

function funcCopyText() {
    var varCopyText = document.getElementById("displayValue");
    varCopyText.select();
    varCopyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(varCopyText.value);
    alert("Copied the text: " + varCopyText.value);
}