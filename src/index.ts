import express, {Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors"
import router from "./routes/indexRoute";


const app:express.Application = express()
const port = 4000
const corsOptions = {
    origin:"http://127.0.0.1",
    optionsSuccesStatus:200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use("/api", router)

app.get("/", (req: Request, res: Response)=>{

    res.send("Hello world ")
})


app.listen(port, ()=>{
    console.log("listening on port  " + port)
})

//document outligning changes made in a db through the time
//create learning_db --sql-file        create a migration
//it is important to have a database.json file configure then add the table we want
//run the migration with the command db-migrate up