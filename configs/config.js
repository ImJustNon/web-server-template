module.exports = {
    database: {
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
        mongoDB: {
            URI: "",
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        },
    },
    app: {
        port: 8000,
    }
}