//equilátero: todos os lados iguais
//isóceles: dois lados iguais
//escaleno: lados diferentes

var lado1 = parseFloat(prompt`Digite o comprimento do lado 1.`)
var lado2 = parseFloat(prompt`Digite o comprimento do lado 2.`)
var lado3 = parseFloat(prompt`Digite o comprimento do lado 3.`)

if (lado1 == lado2 && lado2 == lado3) {

    alert('Esse é um triângulo Equilátero. Possui os três lados iguais.')

} else if (lado1 == lado2 || lado2 == lado3) {

    alert('Esse é um triângulo Isóceles. Possui dois lados iguais.')

} else if (lado1 != lado2 && lado2 != lado3) {
    
    alert('Esse é um triângulo Escaleno. Possui os três lados diferentes.')
}