var botao = document.querySelector('#clique')
var reflexoes = document.querySelector('#reflexoes')
var campoTexto = document.querySelector('#campo-texto')



//IIFE Função auto invocada
;(function(){
   tradutor()
})();



botao.addEventListener('click',  tradutor)

function tradutor(){
    //Chamando mensagem 
    
    axios.get('https://api.adviceslip.com/advice')
    .then(function(response){
        campoTexto.innerHTML = ''
       
       //Traduzindo mensagem
        axios.get('https://api.mymemory.translated.net/get?q='+response.data.slip.advice+'&langpair=en-US|pt-BR')
       .then(function(response){
          /*console.log(response.data.responseData.translatedText) */
          criarLinha(response.data.responseData.translatedText)
       }).catch(function(error){
          campoTexto.innerHTML = ''
          console.log(error)
          criarLinha('Algo deu errado!')
       })


    }).catch(function(error){
        campoTexto.innerHTML = ''
        console.log(error)
        criarLinha('Algo deu errado!')
    })

    

    
}

//Criando linha 
function criarLinha(texto){
    var linha = document.createElement('p')
    var texto = document.createTextNode(texto)

    linha.appendChild(texto)
    campoTexto.appendChild(linha)

    
}


