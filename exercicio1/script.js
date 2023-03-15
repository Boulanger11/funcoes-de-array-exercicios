const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1. EU QUE FIZ
 /*    for (let i in objeto){
        objeto[i] = objeto[i].toUpperCase()
    }
    console.log(objeto)
 */

    // 1. REVISÃO

const deixarMaiusculo = (obj) => {
    const novoObjeto = {} 
     for (let prop in objeto){
        novoObjeto[prop] = objeto[prop].toUpperCase()
    }
    console.log(novoObjeto)
}
deixarMaiusculo(objeto)

    // 2. REVISÃO

const retornarTexto = (obj) => {

    return `O nome é ${obj.nome}, a profissão é ${obj.profissao}, o username é ${obj.username} e a senha é ${obj.senha}.`
    
}
console.log(retornarTexto(objeto))

    // 3. REVISÃO

function callBack (obj, callback){
    const valor = callback(obj)
    console.log(valor)
}
callBack(objeto, deixarMaiusculo)
callBack(objeto, retornarTexto)
