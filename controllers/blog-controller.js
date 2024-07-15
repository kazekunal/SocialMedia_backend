import blog from "../models/blog.js";

export const getAllBlogs = async(req,res,next) => {
    let blogs;

    try {
        blogs = await blog.find();
    } catch (err) {
        return console.log(err)
    }

    if(!blogs){
        return res.status(400).json({message:"Blog not found"})
    }

    return res.status(200).json({blogs})
}

export const postAllBlogs = async(req,res,next) => {
    const {title,description,image,user} = req.body;
    const new_blog = new blog({
        title,
        description,
        image,
        user,
    });

    try {
        await new_blog.save();
    } catch (err) {
        return console.log(err)
    }

    return res.status(200).json({new_blog})
}

export const update_blog = async(req,res,next) => {
    const blogid = req.params.id
    const {title,description} = req.body;
    let updated_blog;

    try {
        updated_blog = await blog.findByIdAndUpdate(blogid,{
            title,
            description,
        })
    } catch (err) {
        return console.log(err)
    }

    if(!blog){
        return res.status(500).json({message:"No blogs found"})
    }

    return res.status(200).json({updated_blog});
}

export const getById = async(req,res,next) => {
    const id = req.params.id;
    let getblog;

    try {
        getblog = await blog.findById(id);
    } catch (err) {
        return console.log(err);
    }

    if(!getblog){
        return res.status(404).json({message: "Blog not found"})
    }

    return res.status(200).json(getblog);

}

export const deleteBlog = async(req,res,next) => {
    const id = req.params.id;
    let delBlog;

    try {
        delBlog = await blog.findByIdAndDelete(id);
    } catch (err) {
        return console.log(err)
    }
    if(!id){
        return res.status(404).json({message: "id not found"});
    }
    return res.status(200).json({message: "Blog deleted"});
}