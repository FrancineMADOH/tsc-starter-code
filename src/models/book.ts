//when creating element that share the same properties and method we use classes
// a table can be represent in code by a class each row will be an instance of the class

import client from "../database";

export type book = {
    id: Number;
    book_title: string;
    author: string;
    published: string;
    pages: string;
    genre: string;
    available: string;
    summary: string;
}

export class bookStore{
//index route
async index(): Promise<book[]>{

    try{
    //open a connection to the db
    const conn = await client.connect()
    const sql = "SELECT * FROM book"
    //run the query on the db
    const result  = await conn.query(sql)
    //close the connection
    conn.release()

    return result.rows
    }catch(err){
        throw new Error (`cannot get ${err}`)
    }
    
}

async show(id: number): Promise<book[]>{

    try{
        const conn =  await client.connect()
        const sql_command  =  "SELECT * FROM book WHERE id == ($1) "
        const result = await conn.query(sql_command,[id])
        conn.release()
    
        return result.rows[0]
    }catch(err){
        throw new Error(`No book with id ${id}`)
    }
}

async create(b:book):Promise<book>{
    try{
        const conn = client.connect()
        const sql_command = " INSERT INTO book(b.book_title, b.author, b.available, b.genre, b.pages, b.published, b.summary) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *"
        const result = await conn.query(sql_command,[b.book_title, b.author, b.available, b.genre, b.pages, b.published, b.summary])
        const book = result.rows[0]
        return book
    }catch(err){
        throw new Error(`Could not add new book with title ${b.book_title}. Error: ${err}`)
    }
}

async delete(id: number): Promise<book[]>{

    try{
        const conn =  await client.connect()
        const sql_command  =  "DELETE  FROM book WHERE id == ($1) "
        const result = await conn.query(sql_command,[id])
        conn.release()
    
        return result.rows[0]
    }catch(err){
        throw new Error(`Failed to delete the book with id ${id}. Error: ${err}`)
    }
}

}