const hostUrl = 'http://localhost:3000/';

window.requestData = function(codeClient){
    try {
        const promise = fetch(`${hostUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: codeClient.nome,
            codNome: codeClient.codNome,
            sobrenome: codeClient.sobrenome,
            codSobrenome: codeClient.codSobrenome,
            email: codeClient.email,
            codEmail: codeClient.codEmail
        }),
        });
        if (!promise) {
        alert("Algo deu errado no envio dos dados.");
        return [];
        }
        promise.then(response => {
        if(!response.ok){
            alert("Erro no processamento dos dados.");
        }
        return response.json();
        })
        .then(function(data){
           const animalInfos = document.getElementById('dataAnimal');
           const colorInfos = document.getElementById('dataColor');
           const countryInfos = document.getElementById('dataCountry');

           animalInfos.textContent = `Animal: ${data.animal}`;
           colorInfos.textContent = `Cor: ${data.cor}`;
           countryInfos.textContent = `País: ${data.pais}`;
        })
    } catch (error) {
        console.error("Erro na comunicação com o servidor: ", error);
    }
};