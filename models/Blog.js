const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    desc: {
        type: String
    },
    image: {
        type: String,
        required: [false]
    },
    content: {
        type: String,
        required: [true, "You don't want an empty blog"]
    }
})

const Blog = mongoose.model("blog", BlogSchema)

exports.AddBlog = (blog) => {
    return Blog.create(blog)
}

exports.GetAllBlogs = () => {
    return Blog.find()
}

exports.GetBlog = (id) => {
    return Blog.findById(id)
}