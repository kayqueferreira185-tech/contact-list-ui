const formulario = document.querySelector ('.input-crud');
const botaoform = document.querySelector ('.add-ctt');

botaoform.addEventListener('click', () =>{
   
    formulario.classList.toggle('hidden');

});

const botaoSave = document.querySelector ('.save-button');
const listacontatos = document.querySelector('.lista-contatos');
const inputName = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTel = document.querySelector('#telefone');


botaoSave.addEventListener('click', () =>{


    const nome = inputName.value;
    const email = inputEmail.value;
    const numeroP = inputTel.value;
    if (!validaInput(nome, email, numeroP)) {
        return;
    }
    limparErro();
    limpaInput();
    criarContato(nome,email,numeroP);
});

function criarContato(nome, email, numeroP){

    const img = document.createElement('img');
    img.alt = 'avatar padrão';
    img.src = 'imagens/imagem_avatar.png';

    const h2 = document.createElement ('h2');
    h2.textContent = nome;
    const emailP = document.createElement ('p');
    emailP.textContent = email;

    const telefoneP = document.createElement ('p');
    telefoneP.textContent = numeroP;

    const divCreate = document.createElement ('div');
    divCreate.classList.add('info');
    img.classList.add('imagem');

    divCreate.appendChild(h2);
    divCreate.appendChild(telefoneP);
    divCreate.appendChild(emailP);
    

    const li = document.createElement('li');
    li.classList.add('contato')
    
    li.appendChild(img);
    li.appendChild(divCreate);
    li.appendChild(criarBotaoRemove());
    listacontatos.appendChild(li);
}
function criarBotaoRemove(){
  
    const botaoRemover = document.createElement('button');
   botaoRemover.classList.add('btn-remover');
   botaoRemover.setAttribute('aria-label', 'remover contato');

   botaoRemover.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icone-lixeira">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
   </svg>`;      
   
   return botaoRemover;
}


function limpaInput(){
    inputName.value = "";
    inputEmail.value = "";
    inputTel.value = "";
};

function validaInput (nome,email,numeroP){
    if (nome === ""){
        mostrarErro('Nome inválido');
        return false;
    }
      if (email === ""){
        mostrarErro('Email inválido');
        return false;
      }
        if (numeroP === ""){
            mostrarErro('Número inválido');
            return false;
        }
        return true;
}

const erroVisual = document.createElement('span');
erroVisual.classList.add('erro');
formulario.appendChild(erroVisual);

function mostrarErro (msg){
    erroVisual.textContent = msg;
    erroVisual.classList.add('erro-show');
    
};
function limparErro() {
    erroVisual.textContent = "";
    erroVisual.classList.remove('erro-show');
}