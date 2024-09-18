var favicon = document.getElementById("favicon")
var bg = document.getElementById("conteudo")
var txtclaro = document.querySelector(".textoclaro")
var txtmeio = document.querySelector(".textomeio")
var txtescuro = document.querySelector(".textoescuro")

function tema(fundo, fav, txtmostrar, txtesconder) {
    bg.style.backgroundColor = fundo
    favicon.href = fav
    txtmostrar.style.display = "inherit"
    txtesconder.forEach(function(texto) {
        texto.style.display = "none";
    });
}

// Tema Claro
document.getElementById("claro").addEventListener('click', function() {
    tema("#fff", "src/img/fav-sol.ico", txtclaro, [txtmeio, txtescuro])
})

// Tema Meio Escuro
document.getElementById("meio-escuro").addEventListener('click', function() {
    tema("#364478", "src/img/fav-meialua.ico", txtmeio, [txtclaro, txtescuro])
})

// Tema Escuro
document.getElementById("escuro").addEventListener('click', function() {
    tema("#1b1d38", "src/img/fav-lua.ico", txtescuro, [txtclaro, txtmeio])
})