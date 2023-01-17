import express, { Request, Response } from "express";
import { Book,bookStore } from "../models/book";

const book = new bookStore();


export class BookHandler {
    async index(req:Request, res:Response){
        const allbooks = await book.index();
        res.json(allbooks)
    }

    async create(req:Request, res:Response){
      const data = req.body
      const onebook = await book.create(data)
      res.status(201)
      res.json(onebook)
        
    }
}




// const teacherMethods = new TeacherModel();
// export class TeacherHandler {
//   async index(req: Request, res: Response) {
//     // console.log(req.headers);
//     // res.send(req.headers);
//     const result = await teacherMethods.index();
//     res.json(result);
//   }

//   async create(req: Request, res: Response) {
//     const data = req.body;

//     const result = await teacherMethods.create(data);

//     res.status(201);
//     res.json(result);
//   }

//   verifyAuthToken = (req: Request, res: Response, next) => {
//     try {
//       const authorizationHeader = req.headers.authorization;
//       const token = authorizationHeader.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

//       next();
//     } catch (error) {
//       res.status(401);
//       res.send(error.message);
//     }
//   };
//}




