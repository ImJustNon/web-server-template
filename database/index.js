// database setup

const config = require("../configs/config.js").database.choose_Database;

if(typeof config !== "undefined" && typeof config === "object" && config.length > 0){
    const db = [];
    if(config.includes("mongo")){
        db.push("mongoDB");
    }
    if(config.includes("pg")){
        db.push("postgreSQL");
    }
    if(config.includes("mysql")){
        db.push("mySQL");
    }
    if(config.includes("quickmongo")){
        db.push("quickMongo");
    }
    if(config.includes("mssql")){
        db.push("microsoftSQL");
    }
    if(config.includes("oracle")){
        db.push("oracleDB");
    }

    if(db.length !== 0){
        db.forEach(async(dir) =>{
            require(`./${dir}/connect.js`).connect();
        });
    }
}
