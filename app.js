import express  from "express";
import mongoose from 'mongoose';
import blogRouter from "./routes/blog-routes.js";
import userRoutes from './routes/user-routes.js';

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/blog", blogRouter);

mongoose.connect(
    'mongodb+srv://kunalpassan30:kskP739wADoJ3eM6@cluster0.cqkfeaz.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => app.listen(3000))
    .then(()=> console.log("Server connected"))
    .catch((err)=>console.log(err));


