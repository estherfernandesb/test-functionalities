document.getElementById("botaoTeste").addEventListener("click", function () {
    pop(); 

    let opcao;

    do {
        opcao = parseInt(prompt("Você quer explodir a sua própria cabeça hoje?\nSe sim, digite 1, se não, digite 2: "), 10);

        switch (opcao) {
            case 1:
                //alert("EXPLODIU!!!!");
                //window.location.href = "https://www.youtube.com/watch?v=_RdFRFt6hws";
                mostrarExplosao();
                break;
            case 2:
                alert("Você pode explodir quando quiser.");
                break;
            default:
                alert("Apenas 1 ou 2");
        }
    } while (opcao !== 1 && opcao !== 2); 
});

function pop() {
    alert("Testando..."); 
}

function mostrarExplosao() {
    let img = document.createElement("img");
    
    img.src = "img/explosion.gif"; 

    img.style.position = "fixed";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "9999"; 

    document.body.appendChild(img);

    
    setTimeout(function () {
        img.remove();
    }, 3000); 
}