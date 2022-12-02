const config = require('../../configs/config.js');
const { Database } = require('quickmongo');

const connection = new Database(config.database.quickMongo.URI);

const connect = async() =>{
    await connection.connect().catch((err) =>{
        console.log(`[Database] quickMongo : Cannot connect to MongoDB ERROR : ${err}`);
    });

    connection.on("ready", () => {
        console.log("[Database] quickMongo : Connected");
    });
}

exports.connect = connect;
exports.connection = connection;