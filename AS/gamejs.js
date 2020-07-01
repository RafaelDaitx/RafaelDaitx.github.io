function media() {
    var avaliacoes = document.querySelectorAll("#avaliacao");
    var total = 0;
    avaliacoes.forEach(function (item) {
        //  ForEach faz basicamente a mesma coisa que um If, só que ele faz, digamos de forma direta, 
        // e a function é para fazer acontecer, dentro da function pode ser qualquer nome
        total += Number(item.value);
    })

    var mostrar_media = document.querySelector(".mostrar_resultado");

    var calcular = total / 8;

    if (calcular > 10) {
        mostrar_media.innerHTML = `Inisira valores somente de 1 até 10`;
    } else {
        mostrar_media.innerHTML = `Sua nota média para The Last Of Us foi de ${calcular.toFixed(2)}.`;
    }
    //esse replace inibe qualquer letra que for colocado, e não calculando elas .value.replace(/\D/g,"")); ${usuario}
}