function calculo() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso / (altura * altura);
    var pesoideal = 24.9 * (altura * altura);
    var M;

    if (imc <= 16.9) {
        M=("Seu imc é:" + imc + ".\nVocê está muito abaixo do peso.\nSeu peso ideal é: " + pesoideal);
    } else
    if (imc > 16.9 && imc <= 18.4) {
        M=("Seu imc é:" + imc + ".\nVocê está abaixo do peso.\nSeu peso ideal é: " + pesoideal);
    } else
    if (imc > 18.4 && imc <= 24.9) {
        M=("Seu imc é:" + imc + ".\nVocê está com o peso normal.");
    } else
    if (imc > 24.9 && imc <= 29.9) {
        M=("Seu imc é:" + imc + ".\nVocê está acima do peso.\nSeu peso ideal é: " + pesoideal);
    } else
    if (imc > 29.9 && imc <= 34.9) {
        M=("Seu imc é:" + imc + ".\nVocê está em obesidade Grau I.\nSeu peso ideal é: " + pesoideal);
    } else
    if (imc > 34.9 && imc <= 40.9) {
        M=("Seu imc é:" + imc + ".\nVocê está em obesidade Grau II.\nSeu peso ideal é: " + pesoideal);
    } else
    if (imc > 40) {
        M=("Seu imc é:" + imc + ".\nVocê está em obesidade Grau III.\nSeu peso ideal é: " + pesoideal);
    }

    document.getElementById("coisa").innerHTML=M;

}