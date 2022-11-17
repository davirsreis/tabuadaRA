$( document ).ready(function() {
    $el=$("a-text")[0];
    $el.setAttribute('value' ,'10');
    console.log($el);
});

function getRandomInt(max) {
    value = Math.floor(Math.random() * max);
    return value+1
}

operacao = ['+','-','*','/']

function quiz(){
    num1 = getRandomInt(10);
    num2 = getRandomInt(10);
    dividendo = num1 * getRandomInt(10)
    sinal = operacao[0]
    if (sinal == '+'){
        correta = num1+num2
        errada = correta + getRandomInt(3)
    }
    if (sinal == '-'){
        correta = num1-num2
        errada = correta - getRandomInt(3)
    }
    if (sinal == '*'){
        correta = num1*num2
        errada = correta + num1
    }
    if (sinal == '/'){
        if (dividendo>num1){
            correta = dividendo/num1
        }else if (num1>dividendo){
            correta = num1/dividendo
        }
        else {
            correta = dividendo/num1
        }
        
        errada = correta+num1
    }
    var1 = getRandomInt(2)-1
    if (var1 == 0){
        var2 = correta;
        var1 = errada
    } else {
        var2 = errada;
        var1 = correta
    }


    if(sinal=='/'){
        console.log(`${dividendo} ${sinal} ${num1} = `);
        console.log(var1 +' ou '+ var2);
    } else {
        console.log(`${num1} ${sinal} ${num2} = `);
        console.log(var1 +' ou '+ var2);
    }
}

quiz()


