import express,{Request ,Response } from "express";
import bookrouter from "./api/bookRouter";

const router = express.Router()

router.get('/', (req:Request, res:Response)=>{
    res.send("main route")
})


router.use("/books", bookrouter)

export default router;