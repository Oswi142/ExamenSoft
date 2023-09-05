function cambiar_a_minusculas(frase) {
    let fraseMin = frase.toLowerCase()
    return fraseMin;
}
function separar_la_frase(frase) {
    let fraseDiv = frase.split(" ")
    return fraseDiv;
}

export {cambiar_a_minusculas, separar_la_frase};
