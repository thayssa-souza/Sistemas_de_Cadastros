const url = "http://138.68.29.250:8082/";

window.dataSubmit = function(newClient){
  var urlencoded = new URLSearchParams();
  urlencoded.append("nome", newClient.nome);
  urlencoded.append("sobrenome", newClient.sobrenome);
  urlencoded.append("email", newClient.email);
  try {
    const promise = fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlencoded,
    });
    if (!promise) {
      alert("Algo deu errado na requisição. Tente novamente mais tarde");
      return [];
    }
    promise.then(response => {
      if(!response.ok){
        alert("Erro na requisição.");
      }
      return response.text();
    })
    .then(function(data){
      console.log("Data: ", data);
      var result = data.split("#");
      //result 1, 3 e 5
      console.log(result[1]);

    });
  } catch (error) {
    console.error("Erro na comunicação com o servidor: ", error);
  }
};