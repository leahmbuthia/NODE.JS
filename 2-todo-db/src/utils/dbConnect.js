import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();
const {SQL_USER,SQL_SERVER,SQL_DB,SQL_SERVER_PORT,SQL_TRUST_SERVER_CERTIFICATE}=process.env

const sqlConfig = {
    user:SQL_USER,
    password: process.env.DB_PASSWORD,
    server: SQL_SERVER,
    databsae: SQL_DB,
    port : Number(SQL_SERVER_PORT),
    pool: {
        max: 10,
        min: 0,
        ideaTimeoutMillis: 3000,
    },
    Options:{
        encrypt:Boolean(SQL_SERVER),
        trustServerCertificate:Boolean(SQL_TRUST_SERVER_CERTIFICATE),
    }
}

let appPool;
let poolRequest;

try {
    appPool = new sql.connect(sqlConfig);
    poolRequest =() => appPool.request();
    
} catch (error) {

    
}