import express,{Request ,Response } from "express";
import { BookHandler } from "../../handlers/bookhandler";

const bookrouter = express.Router()

const bookMethods = new BookHandler()

bookrouter.get("/",bookMethods.index)
bookrouter.post("/", bookMethods.create);


 export default bookrouter;

// import express from "express";
// import { TeacherHandler } from "../../handlers/teacher";
// import { VerifyToken } from "../../middlewares/verifyToken";

// const veriToken = new VerifyToken();
// const teachers = express.Router();

// const teacherMethods = new TeacherHandler();

// teachers.get("/", teacherMethods.verifyAuthToken, teacherMethods.index);
// teachers.post("/", teacherMethods.create);

// export default teachers;