import express from 'express'
import { getAllBlogs, postAllBlogs, update_blog, getById, deleteBlog } from '../controllers/blog-controller.js';

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/view",postAllBlogs);
blogRouter.put("/update/:id",update_blog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);

export default blogRouter;