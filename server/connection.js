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

module.exports.insert = async function insertRegistration(tableName, value, code){
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

module.exports.selectCodName = async function selectCodes(tableCode, code){
    tp.setConnectionConfig(connectionConfig);
    return tp.sql(`SELECT soma FROM ${tableCode} WHERE cod = '${code}'`)
    .execute()
    .then(function(result){
        const sumResult = result[0].soma;
        const somas = parseInt(sumResult) + parseInt(code);
        return somas;
    })
    .fail(function(error){
        console.log("Erro: ", error);
    });
}

module.exports.selectAnimal = async function selectJoinAnimal(animalsTable, tableCode, total){
    tp.setConnectionConfig(connectionConfig);
    return tp.sql(`SELECT animal FROM ${animalsTable} INNER JOIN ${tableCode} ON ${total} = ${animalsTable}.total`)
    .execute()
    .then(function(result){
        return console.log(result[0].animal);
    })
    .fail(function(error){
        console.log("Erro: ", error);
    });
}

module.exports.selectColor = async function selectJoinColors(colorTable, tableCode, total){
    tp.setConnectionConfig(connectionConfig);
    return tp.sql(`SELECT cor FROM ${colorTable} INNER JOIN ${tableCode} ON ${total} = ${colorTable}.total`)
    .execute()
    .then(function(result){
        return console.log(result[0].cor);
    })
    .fail(function(error){
        console.log("Erro: ", error);
    });
}

module.exports.selectCountry = async function selectJoinContries(countryTable, tableCode, total){
    tp.setConnectionConfig(connectionConfig);
    return tp.sql(`SELECT pais FROM ${countryTable} INNER JOIN ${tableCode} ON ${total} = ${countryTable}.total`)
    .execute()
    .then(function(result){
        return console.log(result[0].pais);
    })
    .fail(function(error){
        console.log("Erro: ", error);
    });
}