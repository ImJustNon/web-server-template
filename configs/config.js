module.exports = {
    database: {
        postgreSQL: {
            user: 'postgres',
            host: '203.78.129.233',
            database: 'portfolio',
            password: 'Non_912108',
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
            URI: "mongodb+srv://Kwan-0111:LIVPbGPbI6fVLM9E@cluster0.rp8ie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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