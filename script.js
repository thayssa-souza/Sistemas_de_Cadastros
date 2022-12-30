// function regexValidateName(){
//     /^[a-záàâãéèêíïóôõöúçñ ]+$/i

// }

function validateEmail(){
    // const nameField = document.getElementById("nome").value;
    // const lastNameField = document.getElementById("sobrenome");
    const emailField = document.getElementById("email").value;
    if(regexValidateEmail(emailField)){
        document.getElementById("btnSubmit").disabled = false;
    } else {
        document.getElementById("btnSubmit").disabled = true;
    }
}

// function regexValidateName(nome){
//     const regexName = new RegExp("/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/");
//     return regexName.test(nome);
// }

function regexValidateEmail(emailField){
    const regex = new RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}");
    return regex.test(emailField); 
};

function formValidate(){
    const inputName = document.getElementById("nome").value;
    const inputLastName = document.getElementById("sobrenome").value;
    const inputEmail = document.getElementById("email").value;
    if(inputName == '' || inputLastName == '' || inputEmail == ''){
        alert("Obrigatório preencher todos os campos!");
    }
}

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
        console.log("cliente cadastrado");
    }    
});

