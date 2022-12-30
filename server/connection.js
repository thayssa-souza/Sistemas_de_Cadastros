const { response } = require('express');
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

module.exports.selectAnimal = async function selectJoinAnimal(animalsTable, colorTable, countryTable, excludedColors, total){
    tp.setConnectionConfig(connectionConfig);
    return tp.sql(`SELECT animal, pais, ${colorTable}.cor FROM ${animalsTable} JOIN ${countryTable} ON ${total} = ${animalsTable}.total AND ${animalsTable}.total = ${countryTable}.total JOIN ${colorTable} ON ${colorTable}.total = ${countryTable}.total LEFT JOIN ${excludedColors} ON ${colorTable}.cor = ${excludedColors}.cor AND ${colorTable}.total = ${excludedColors}.total WHERE ${excludedColors}.id IS NULL`)
    .execute()
    .then(function(result){
        console.log(result);
        return result;
    })
    .fail(function(error){
        console.log("Erro: ", error);
    });
}