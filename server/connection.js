const tp = require('tedious-promises');
const TYPES = require('tedious').TYPES;

var connectionConfig = {
    userName: 'user_trial',
    password: '7412LIVE!@#$&*()',
    server: 'virtual2.febracorp.org.br',
    options:{
        database: 'CONTOSO',
        encrypt: false,
    }
};

module.exports.insert = function insertRegistration(tableName, value, code){
    tp.setConnectionConfig(connectionConfig);
    tp.sql(`INSERT INTO ${tableName} VALUES ('${value}', ${code})`)
    .returnRowCount()
    .execute()
    .then(function(rowCount){
        console.log("Executado com sucesso!");
    })
    .fail(function(error){
        console.log("Erro: ", error);
    })
};

module.exports.selectCodName = function selectCodes(tableCode, code){
    tp.setConnectionConfig(connectionConfig);
    return tp.sql(`SELECT soma FROM ${tableCode} WHERE cod = '${code}'`)
    .execute()
    .then(function(result){
        const sumResult = result[0].soma;
        const somas = parseInt(sumResult) + parseInt(code);
        console.log("Soma: ", sumResult);
        console.log("Código: ", code);
        console.log("Total: ", somas);
        return somas;
    })
    .fail(function(error){
        console.log("Erro: ", error);
    });
}