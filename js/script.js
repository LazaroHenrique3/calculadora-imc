
function calcularIMC(){

    let nome = document.getElementById('nome');
    let altura = document.getElementById('altura');
    let peso = document.getElementById('peso');

    let resultado = document.getElementById('resultado');
    let statusPessoa = '';

    if(validaCampos(nome, altura, peso)){

        alturaValue = altura.value.replace(',','.');
        pesoValue = peso.value.replace(',','.');

        let imc = pesoValue / (Number(alturaValue) * Number(alturaValue))

        imc = imc.toFixed(2);

        //Verificando a interpretação do IMC
        if(imc < 18.5) {
            statusPessoa = "abaixo do peso!";
        } else if(imc > 18.5 && imc < 24.9 ){
            statusPessoa = "com o peso normal!";
        } else if(imc > 24.9 && imc < 29.9){
            statusPessoa = "com sobrepeso!";
        } else {
            statusPessoa = "com obesidade!";
        }

        resultado.innerHTML = `${nome.value} seu IMC é ${imc} e você está ${statusPessoa}`
        
    } 

}

function validaCampos(...campos){
    let retorno = true;

    campos.forEach((c) => {
        if(c.value.trim() == ''){
            c.className = 'd-flex justify-content-between box-input border-danger';
           retorno = false
        } else {
            c.className = 'd-flex justify-content-between box-input border-success';
        }
    });

    return retorno;
}

