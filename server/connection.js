const Connection = require('tedious').Connection;

var connectionConfig = {
    server: 'virtual2.febracorp.org.br',
    authentication:{
        type: 'default',
        options:{
            userName: 'user_trial',
            password: '7412LIVE!@#$&*()'
        }
    },
    options:{
        encrypt: false,
        database: 'CONTOSO'
    }
};

var newConnection = new Connection(connectionConfig);
newConnection.on('connect', error => {
    if(error){
        console.log("Não foi possível conectar-se ao banco. Tente novamente.", error)
    } else{ 
        console.log("Conectado ao banco de dados");
    }
})

newConnection.connect();