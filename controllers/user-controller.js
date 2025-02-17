import User from "../models/User.js";
import bcrypt from 'bcryptjs'

export const getAllUser = async(req,res,next) => {
    let users;
    try{
        users = await User.find();
    }catch(err){
        return console.log(err)
    }
    if(!users){
        return res.status(404).json({message: "No users found" })
    }
    return res.status(200).json({ users })
}

export const signup = async(req, res, next) => {
    const {name,email,password} = req.body;
    let existingUser;

    try{
        existingUser = await User.findOne({email});
    }catch(err){
            console.log(err)
    }if(existingUser){
        return res.status(400).json({message: "User already exists! Login instead"});
    }

    const hashedPassword = bcrypt.hashSync(password); //encrypted password for safety purpose

    const user = new User({
        name,
        email,
        password: hashedPassword
    })

    

    try {
        await user.save();
    } catch (err) {
       return console.log(err)
    }
    return res.status(201).json({user});
}

export const login = async(req,res,next)=>{
    const {email,password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({email});
    }catch(err){
            console.log(err)
    }if(!existingUser){
        return res.status(404).json({message: "User not found"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Password is incorrect"});

    }
    return res.status(200).json({message:"Login Successful"});
}