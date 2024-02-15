/*Criptografia*/
function criptografarTexto(texto) {
    // Definindo um objeto que mapeia caracteres para suas substituições
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    // Inicializando a variável textoCriptografado com o texto original
    let textoCriptografado = texto;
    // Iterando sobre as chaves do objeto substituicoes
    for (let chave in substituicoes) {
        // Substituindo todas as ocorrências da chave pelo seu valor correspondente
        textoCriptografado = textoCriptografado.split(chave).join(substituicoes[chave]);
    }
    // Retornando um objeto com título e o texto criptografado
    return {
        titulo: 'Texto Criptografado',
        texto: textoCriptografado
    };
}
function descriptografarTexto(textoCriptografado) {
    // Definindo um objeto que mapeia substituições de volta para os caracteres originais
    const reversoSubstituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    // Inicializando a variável textoDescriptografado com o texto criptografado
    let textoDescriptografado = textoCriptografado;
    // Iterando sobre as chaves do objeto reversoSubstituicoes
    for (let chave in reversoSubstituicoes) {
        // Substituindo todas as ocorrências da chave pelo seu valor correspondente
        textoDescriptografado = textoDescriptografado.split(chave).join(reversoSubstituicoes[chave]);
    }
    // Retornando um objeto com título e o texto descriptografado
    return {
        titulo: 'Texto Descriptografado',
        texto: textoDescriptografado
    };
}
function criptografar() {
    const textoEntrada = document.getElementById('mensagem').value;
    const resultado = criptografarTexto(textoEntrada);
    exibirMensagem(resultado);
}
function descriptografar() {
    const textoCriptografado = document.getElementById('mensagem').value;
    const resultado = descriptografarTexto(textoCriptografado);
    exibirMensagem(resultado);
}
/*Validação*/
function validarCriptografiaTexto() {
    const textoEntrada = document.getElementById('mensagem').value; // Obtém o valor da sua textarea
    var regex = /^[a-z\s]+$/; // Expressão regular para verificar se o texto contém apenas letras minúsculas e espaços

    // Testar se o texto corresponde à expressão regular
    if (regex.test(textoEntrada)) {
        criptografar(textoEntrada);
    } else if(textoEntrada === ''){
        const mensagemErro = document.getElementById('mensagem__erro');
        mensagemErro.innerHTML = `<span class="mensagem__erro__texto">Por favor, preencha o campo acima.</span>`;
        setTimeout(() => {
            mensagemErro.textContent = ""; // Limpa a mensagem de erro
           // limparTelaEAtivarCursor(); // Limpa a tela
           document.getElementById('mensagem').focus();
        }, 2000);
    }else {
      
        const mensagemErro = document.getElementById('mensagem__erro');
        mensagemErro.innerHTML = `<span class="mensagem__erro__texto">O texto é inválido. Certifique-se de usar apenas letras minúsculas e espaços.</span>`;

        // Configura um temporizador para limpar a tela após 3 segundos
        setTimeout(() => {
            mensagemErro.textContent = ""; // Limpa a mensagem de erro
            document.getElementById('mensagem').focus();// Ativa o cursor para digitação
        }, 3000);
    }
}
function validarTextoDescriptografia() {
    const textoCriptografado = document.getElementById('mensagem').value.trim(); // Obtém o valor da textarea e remove espaços em branco extras

    // Expressão regular para verificar se o texto contém pelo menos uma das substituições esperadas e apenas letras minúsculas e espaços
    const regex = /^(?=.*(?:enter|imes|ai|ober|ufat))[a-z\s]+$/;

    // Verifica se o texto criptografado corresponde à expressão regular
    if (regex.test(textoCriptografado)) {
        // Se corresponder, chama a função para descriptografar
        const resultado = descriptografarTexto(textoCriptografado);
        exibirMensagem(resultado);
    } else if(textoCriptografado === ''){
        const mensagemErro = document.getElementById('mensagem__erro');
        mensagemErro.innerHTML = `<span class="mensagem__erro__texto">Por favor, preencha o campo acima.</span>`;
        setTimeout(() => {
            mensagemErro.textContent = ""; 
            document.getElementById('mensagem').focus();
        }, 2000);
    }else {
        // Se não corresponder, exibe uma mensagem de erro dentro da página
        const mensagemErro = document.getElementById('mensagem__erro');
       
        mensagemErro.innerHTML = `<span class="mensagem__erro__texto">O texto não parece ser criptografado ou foi criptografado com outro método.</span>`;
        // Configura um temporizador para limpar a tela após 3 segundos
        setTimeout(() => {
            mensagemErro.textContent = ""; // Limpa a mensagem de erro
           // limparTelaEAtivarCursor(); // Limpa a tela
           document.getElementById('mensagem').focus();
        }, 2000);
    }
}
/*Copiar texto gerado */
function copiarTexto() {
    const resultado = document.querySelector('.conteudo__resposta__texto').textContent;    
    const modal =  document.getElementById('modal');
    const textoCopiado = document.getElementById('texto-copiado');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    navigator.clipboard.writeText(resultado)
    .then(() => {       
        modal.classList.add('modal__show');
        textoCopiado.textContent ='Texto copiado para a área de transferência!';
       
        mensagemSucesso.textContent = "Texto copiado com sucesso!";
        setTimeout(() => {
            mensagemErro.textContent = ""; // Limpa a mensagem de erro
            limparTelaEAtivarCursor(); // Limpa a tela
        }, 2000);
    })
    .catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
    }   
/*Continuar */    
function continuar() {
    const modal = document.getElementById('modal');
    modal.classList.remove('modal__show');
     // Limpa o conteúdo do textarea
    //document.getElementById('mensagem').value ='';
   // document.getElementById('conteudo__resposta__novo').value = '';
   limparTelaEAtivarCursor();
}
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('modal__show');
}  
function compartilhar() {
    const iconesCompartilhamento = document.getElementById('icones-compartilhamento');
    iconesCompartilhamento.classList.toggle('hidden');
}


//<p id="texto-copiado">Obrigado por testar meu trabalho!</p>
            

function exibirMensagem(resultado) {

        document.getElementById('conteudo__resposta').style.height = '100%';
        document.getElementById('conteudo__resposta').style.justifyContent = 'space-between';
        const mensagemSection = document.querySelector('.conteudo__resposta');
        mensagemSection.innerHTML = `

          
                <textarea id="conteudo__resposta__texto" class="conteudo__resposta__texto" rows="15" readonly>${resultado.texto}</textarea>
                
                <div class="btn">                
                    <a class="btn__copiar" onclick="copiarTexto()">Copiar</a>
                </div>
           
               
            <div id="modal" class="modal">
                <div class="modal__fechar">
                    <span class="close-button" onclick="fecharModal()">&times;</span>
                </div>
                <h2 class="modal__mensagem"> Texto copiado para a área de transferência </h2>
                
                <div class="btn__modal__icons">
                    <div class="btn__modal__icons__buttom">
                       <a class='btn__form__modal__dark btn__form__modal'  onclick="compartilhar()">
                          Compartilhar
                       </a>
                       <a class='btn__form__modal__ligth btn__form__modal' onclick="continuar()">
                          Continuar
                       </a>
                    </div>
                    <div id="icones-compartilhamento" class="compartilhar__icons hidden">
                        <a class="compartilhar__icon" href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer"> 
                           <img src="./assets/images/facebook_icon__svg.png" alt="" srcset="">
                        </a> 

                        <a class="compartilhar__icon" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                           <img src="./assets/images/instagram_icon__svg.png" alt="" srcset="">
                        </a>

                        <a class="compartilhar__icon" href="https://br.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/linkedin_iconp__svg.svg" alt="" > 
                        </a>

                        <a href="https://twitter.com/?lang=pt-br" target="_blank" rel="noopener noreferrer"> 
                           <img src="./assets/images/twitter_x_icon.svg" alt="" >
                        </a>

                        <a class="compartilhar__icon" href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                           <img src="./assets/images/whatsapp-logo_icon__svg.svg" alt="" >
                        </a>
                    </div>
                </div>
        </div>       
        `;
}
function limparTelaEAtivarCursor() {
    window.location.reload();
    // Limpa o conteúdo do textarea
   // document.getElementById('mensagem').value = '';
    //document.getElementById('conteudo__resposta__texto').value = '';
    
    // Ativa o cursor dentro do textarea
    document.getElementById('mensagem').focus();
}



