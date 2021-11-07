    function sabado() {
        var dia = new Date().getDay()
        var tela = document.getElementById('tela')
        var salao = document.querySelector('div#interface')
        if (dia == 6) {
            tela.style.background = 'linear-gradient(to bottom, #F5DE4E, #FABD44)'
    }
}