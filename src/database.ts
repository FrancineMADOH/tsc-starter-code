import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config()




const {
 POSTGRES_HOST,
 POSTGRES_DB, 
 POSTGRES_USER, 
 POSTGRES_PASSWORD, 
 ENV
} = process.env
console.log(ENV);

let client

if(ENV==='test'){
    //pool = connection to the db
 client = new Pool({
    host:POSTGRES_HOST,
    database:POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,

})


}

if(ENV==='dev'){
    //pool = connection to the db
 client = new Pool({
    host:POSTGRES_HOST,
    database:POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
})


}

export default client