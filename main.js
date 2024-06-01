const valores = document.getElementById('valores');

valores.addEventListener('submit',function(d) {
    d.preventDefault();

    const maior = document.getElementById("Maior")
    const menor = document.getElementById('Menor')

    const numero1 = parseInt(maior.value);
    const numero2 = parseInt(menor.value);

    const comparação1 = `numero ${maior.value} é maior que ${menor.value}`
    const comparação2 =`numero ${maior.value} é menor que ${menor.value}`
    const igualdade = `valores ${maior.value} e ${menor.value} são iguais`

    if (numero1>numero2){
    alert(comparação1);
}   else if(numero1 ===numero2){
    alert(igualdade);
}   else {
    alert(comparação2);
}   
})
