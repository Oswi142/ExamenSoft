function cambiar_a_minusculas(frase) {
    let fraseMin = frase.toLowerCase()
    return fraseMin;
}
function separar_la_frase(frase) {
    let fraseDiv = frase.split(" ")
    return fraseDiv;
}
function contar_apariciones(frase){
    let fraseMin = cambiar_a_minusculas(frase);
    let fraseDiv = separar_la_frase(fraseMin);
    let fraseTam = fraseDiv.length();
    for(let i=0;i<fraseTam;i++)
    {
        return fraseDiv[i]+":1";
    }
}

export {cambiar_a_minusculas, separar_la_frase, contar_apariciones};
