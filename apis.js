const url = "http://138.68.29.250:8082/";

window.dataSubmit = function(){
    try {
        const promise = fetch(`${url}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            nome: 'nome',
            sobrenome: 'sobrenome',
            email: 'email'
          }),
        });
        if (!promise) {
          alert("Algo deu errado na requisição. Tente novamente mais tarde");
          return [];
        }
        console.log("Oi");
        return promise.json();
      } catch (error) {
        console.error("Erro na comunicação com o servidor: ", error);
      }
};