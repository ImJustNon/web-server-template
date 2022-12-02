const config = require("../../configs/config.js");
const mssql = require('mssql');

const connect = async() =>{
    await mssql.connect(config.database.microsoftSQL).catch((err) =>{
        if(!err){
            console.log("[Database] MicrosoftSQL : Connected");
        }
        else {
            console.log(`[Database] MicrosoftSQL : Cannot connect to database ERROR : ${err}`);
        }
    });
    mssql.on('error', (err) => {
        console.log(`[Database] MicrosoftSQL : ERROR : ${err}`);
    });
}

const query = async({ sql }) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const result = await mssql.query(sql);
            resolve({
                result: result,
                error: null,
            });
        } catch(err){
            resolve({
                result: null,
                error: err,
            });
        }
    });
}

exports.connection = mssql;
exports.connect = connect;
exports.query = query;