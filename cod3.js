var x = parseInt(prompt('Digite o valor da variável X.')) //5
var y = parseInt(prompt('Digite o valor da variável Y.')) //9

alert(`Valor de X = ${x} e o valor de Y = ${y}`)

var z = x //z=5

x = y //x=9

y = z //y=5

alert(`Valor de X = ${x} e o valor de Y = ${y}`)