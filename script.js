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
    
    
    listacontatos.appendChild(li);

});