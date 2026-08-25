const botoes= document.querySelectorAll("button");

botoe.forEach (function  (botao) {
    let curtiu= false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.texto.textContent++;
            curtir = true;
            }else{
                texto.textContent--;
                curtiu = false;
            }
        
    }
})