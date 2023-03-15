// 1.
const arrayNumeros = [1,2,3,4,5,6,7,8]

const quintuplos = arrayNumeros.map((elemento,indice)=>{
return 5 * elemento
})
console.log(`Original: ${arrayNumeros} Multiplicado por 5: ${quintuplos}`)

// 2.
const metades = arrayNumeros.filter((elemento)=>{
    return elemento / 2
})
console.log(`Original: ${arrayNumeros}
Os Pares são: ${metades}`)