var Numero1, Numero2, Numero, Operador, Resultado, Pergunta, Operacao, True = 0,
False = 0; 

Numero1 = document.getElementById('Numero1');
Numero2 = document.getElementById('Numero2');
Operador = document.getElementById('Operador');
Resultado = document.getElementById('Resultado');
Pergunta = document.getElementById('Pergunta');
True = document.getElementById('true');
False = document.getElementById('false');
Numero = document.getElementById('Numero');
Botao = document.getElementById('responder')

/*function NumerosAleatorios (min, max) {
    var Numero = Math.random() * (max-min) + min;
    return Numero;
}*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function novaPergunta() {
    var Operacao = ["+","-","*", "/"];

    console.log ("bla"); 
    Operador.textContent = Operacao[getRandomInt(0,3)];
    Numero1.textContent = getRandomInt(0,9);
    Numero2.textContent = getRandomInt(0,9);

    if (Operador.textContent == "/") {
        while (true) {
           Numero2.textContent = NumerosAleatorios(0,20); 
           if(Numero1.textContent%Numero2.textContent == 0){
            break;
           }
        }

    }
}

window.onload = function() {
    novaPergunta();
}

Botao.onclick = function () {
   /* var Resultado,Numero1,Numero2;*/
    n1 = Number(Numero1.innerHTML);
    n2 = Number(Numero2.textContent);

    switch (Operador.textContent) {
        case '+': Resultado=n1+n2; break; 
        case '-': Resultado=n1-n2; break;
        case '*': Resultado=n1*n2; break;
        case '/': Resultado=n1/n2; break;
            
        default:break;
    }
    if(Resultado.value == Pergunta){
        True.textContent = Number(True.textContent)+1;
    } else {
        False.textContent = Number(False.textContent)+1;
    }    
    document.getElementById('Resultado').value="";
    novaPergunta();

}

