module.exports = {
    database: {
        choose_Database: [ //mongo pg mysql quickmongo mssql oracle
            "mongo",
            "pg",
            "mysql",
            "quickmongo",
            //"mssql",
            // "oracle",
        ], 
        postgreSQL: {
            user: '',
            host: '',
            database: '',
            password: '',
            port: 5432,
            // connectionString: string, 
            // ssl: any, 
            // types: any, 
            // statement_timeout: number, 
            // query_timeout: number, 
            // application_name: string, 
            // connectionTimeoutMillis: number,
            // idle_in_transaction_session_timeout: number
        },
        mySQL: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'test',
            // connectionLimit: 100,
        },
        mongoDB: {
            URI: "",
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        },
        quickMongo: {
            URI: "",
        },
        microsoftSQL: {
            user: "",
            password: "",
            database: "",
            server: "",
            options: {
                encrypt: false, // set true for azure
                trustServerCertificate: true // change to true for local dev / self-signed certs
            },
        },
        oracleDB: {
            user: "",
            password: "",
            connectString: "", // "localhost/orclpdb1"
        },
    },
    app: {
        port: 8000,
    }
}