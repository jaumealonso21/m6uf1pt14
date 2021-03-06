
function num() {
    var num = arguments[0];
    var resposta = "";
    
    if ((num % 2) === 0) {
        resposta = "El num és parell";
    } else {
        resposta = "El num és imparell";
    }
    
    document.getElementById("desti").innerHTML = resposta;
    
    return true;
}

function textMaj() {
    var text = arguments[0];
    var resposta = "";
    
    if(text === text.toUpperCase()) {
        resposta = "La cadena només conté majúscules";
    } else if (text === text.toLowerCase()) {
        resposta = "La cadena només conté minúscules";
    } else {
        resposta = "La cadena conté majúscules i minúscules";
    }
    
    document.getElementById("desti").innerHTML = resposta;
    
    return true;
}

function capicua() {
    var text1 = arguments[0];
    var text2 = arguments[0];
    var resposta = "";
    var matriu = [];
    var matriu2 = [];
    var x;
    var punt = true;
    
    matriu = text1.split("").reverse();
    matriu2 = text2.split("");
    
    for(x in matriu) {
        if(matriu[x] !== matriu2[x]){
            punt = false;
            break;
        }
    }
  
    if(punt) {
        resposta = "És palíndrom";
    } else {
        resposta = "No és palíndrom";
    }
    
    document.getElementById("desti").innerHTML = resposta;
    
    return true;
}

function parametres () {
    var resposta;
    
    switch(arguments[0]) {
        case 1:
            resposta = parseInt(arguments[1])*parseInt(arguments[1])*parseInt(arguments[1]);
            break;
        case 2:
            resposta = parseInt(arguments[1])+parseInt(arguments[2]);
            break;
        case 3:
            resposta = parseInt(arguments[1])*parseInt(arguments[2])*parseInt(arguments[3]);
            break;
        case 4:
            resposta = arguments[1].toLowerCase();
            break;
        case 5:
            resposta = arguments[1] + arguments[2];
            break;
        default:
            resposta = "Num de paràmetres incorrecte";
            break;
    }

    document.getElementById("desti").innerHTML = resposta;
    
    return true;
}