var favicon = document.getElementById("favicon")
var bg = document.getElementById("conteudo")
var txtclaro = document.querySelector(".textoclaro")
var txtmeio = document.querySelector(".textomeio")
var txtescuro = document.querySelector(".textoescuro")

// Tema Claro
var claro = document.getElementById("claro").addEventListener('click', function() {
    bg.style.backgroundColor =  "#fff"
    favicon.href = "src/img/fav-sol.ico"
    txtclaro.style = "display: inherit"
    txtescuro.style = "display: none"
    txtmeio.style = "display: none"
})

// Tema Meio Escuro
var meio = document.getElementById("meio-escuro").addEventListener('click', function() {
    bg.style.backgroundColor = "#364478"
    favicon.href = "src/img/fav-meialua.ico"
    txtmeio.style = "display: inherit; color: #fff"
    txtclaro.style = "display: none"
    txtescuro.style = "display: none"
})

// Tema Escuro
var escuro = document.getElementById("escuro").addEventListener('click', function() {
    bg.style.backgroundColor = "#1b1d38"
    favicon.href = "src/img/fav-lua.ico"
    txtescuro.style = "display: inherit; color: #fff"
    txtclaro.style = "display: none"
    txtmeio.style = "display: none"
})