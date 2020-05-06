const Model = require('../models/Blog')

exports.addblog = (req,res) => {
    const blog = req.body

    const response = Model.AddBlog(blog);
    response.then(data => {
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).json(err)
    })

}

exports.getallblogs = (req,res) => {

    const response = Model.GetAllBlogs()
    response.then(data => {
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).json(err)
    })

}

exports.getblog = (req,res) => {
    
    const response = Model.GetBlog(req.params.id)
    response.then(data => {
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
    
}