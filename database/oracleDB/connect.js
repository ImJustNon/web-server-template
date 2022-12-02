const config = require('../../configs/config.js');
const oracledb = require('oracledb');

let connection;

const connect = async() =>{
    connection = await oracledb.getConnection(config.database.oracleDB).catch((err) =>{
        if(!err){
            console.log(`[Database] OracleDB : Connected`);
        }
        else {
            console.log(`[Database] OracleDB : Cannot connect to database ERROR : ${err}`);
        }
    });
}

const query = async({ sql, binds, option }) =>{
    return new Promise(async(resolve, reject) =>{
        if(typeof sql === "undefined"){
            throw new Error('Please specify SQL command');
        }

        if(typeof sql === "string"){
            let err;
            const result = await connection.execute(sql).catch((e) =>{
                err = e;
            });
            resolve({
                result: result,
                error: err,
            });
        }
        else if(typeof sql === "string" && binds){
            let err;
            const result = await connection.execute(sql, binds).catch((e) =>{
                err = e;
            });
            resolve({
                result: result,
                error: err,
            });
        }
        else if(typeof sql === "string" && binds && typeof option === "object"){
            let err;
            const result = await connection.execute(sql, binds, option).catch((e) =>{
                err = e;
            });
            resolve({
                result: result,
                error: err,
            });
        }
    });
}

exports.connect = connect;
exports.query = query;
exports.connection = connection;
