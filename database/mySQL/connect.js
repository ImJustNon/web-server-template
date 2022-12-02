const mysql = require('mysql2');
const config = require('../../configs/config.js');

const connection = mysql.createConnection(config.database.mySQL);

const connect = async() =>{
    connection.connect((err) =>{
        if (err) {
            console.log(`[Database] mySQL : Cannot connect to database ERROR : ${err}`);
        } 
        else {
            console.log("[Database] mySQL : Connected");
        }
    });
}

const query = async({ sql, option }) =>{
    return new Promise(async(resolve, reject) =>{
        // no  sql
        if(typeof sql === "undefined"){
            throw new Error('Please specify SQL command');
        }
        else if(typeof sql === "undefined" && typeof option === "object"){
            throw new Error('Please specify SQL command');
        }

        // sql ok
        if(typeof sql === "string"){
            await connection.query(sql,(err, result) =>{
                resolve({
                    error: err,
                    result: result,
                });
            });
        }
        else if(typeof sql === "string" && typeof option === "object"){
            await connection.query(sql, option, (err, result) =>{
                resolve({
                    error: err,
                    result: result,
                });
            });
        }
    });
}

exports.connection = connection;
exports.connect = connect;
exports.query = query;