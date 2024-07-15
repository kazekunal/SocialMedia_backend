import express from "express";
import { getAllUser, signup, login } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/",getAllUser);
router.post("/signup",(req,res)=> {
    // console.log("POST /api/users/signup triggered");
    signup(req, res);
});
router.post("/login",login);


export default router;