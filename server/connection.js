const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

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

module.exports.insert = function insertRegistration(tableName, value, code){
    var newConnection = new Connection(connectionConfig);
    
    newConnection.on('connect', error => {
        if(error){
            console.log("Não foi possível conectar-se ao banco. Tente novamente.", error)
        } else{ 
            const request = new Request(`INSERT INTO ${tableName} OUTPUT INSERTED.id VALUES (@value, @code)`, function(error){
                if(error){
                    console.log("Erro: ", error);
                }
            });
            request.addParameter("value", TYPES.NVarChar, value);
            request.addParameter("code", TYPES.BigInt, code);
        
            request.on("row", function(columns){
                columns.forEach(function(column){
                    if(column.value == null){
                        console.log("Não é permitido campos vazios");
                    } else {
                        console.log("Cliente inserido com sucesso!");
                    }
                });
            });
            request.on("requestCompleted", function(rowCount, more){
                newConnection.close();
            });
            newConnection.execSql(request);
        }
    });
    newConnection.connect();
}

module.exports.selectCodName = function selectCodes(tableCode, code){
    var newConnection = new Connection(connectionConfig);
    
    newConnection.on('connect', error => {
        if(error){
            console.log("Não foi possível conectar-se ao banco. Tente novamente.", error)
        } else{ 
            const requestSelect = new Request(`SELECT soma FROM ${tableCode} WHERE cod = @code`, function(error){
                if(error){
                    console.log("Erro: ", error);
                }
            });
            requestSelect.addParameter("code", TYPES.BigInt, code);

            requestSelect.on("row", function(columns){
                columns.forEach(function(column){
                    if(column.value == null){
                        return console.log("Nulo.");
                    } else {
                        let codeSoma = parseInt(column.value) + parseInt(code);
                        console.log(`${tableCode}: ${codeSoma}`);
                        return codeSoma;
                    }
                });
            });

            requestSelect.on("requestCompleted", function(){
                newConnection.close();
                console.log("Terminou de rodar");
            });
            newConnection.execSql(requestSelect);
        }
    });
    newConnection.connect();
}

