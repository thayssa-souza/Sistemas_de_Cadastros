const btn = document.getElementById("btnSubmit");
btn.addEventListener("click", async function (event){
    event.preventDefault();
    
    const inputName = document.getElementById("nome").value;
    const inputLastName = document.getElementById("sobrenome").value;
    const inputEmail = document.getElementById("email").value;
    if(inputName == '' || inputLastName == '' || inputEmail == ''){
        alert("Obrigatório preencher todos os campos!");
    } else {
        const newClient = {
            nome: document.getElementById("nome").value,
            sobrenome: document.getElementById("sobrenome").value,
            email: document.getElementById("email").value
        };
        
        dataSubmit(newClient);
        alert("Cadastro realizado com sucesso!");
    }    
});

const visibleResults = document.getElementById('btnResults');
visibleResults.addEventListener("click", (event) => {
    event.preventDefault();

    containerModal = document.getElementById('containerModal').style.display = 'block';
    
});

const closeModal = document.getElementById("btnClose");
closeModal.addEventListener("click", () => {    
    containerModal = document.getElementById('containerModal').style.display = 'none';
    
});