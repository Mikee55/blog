const { default: mongoose } = require("mongoose");
const Blog = require("../models/blogModel");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
};

const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(400).jsaon({ error: "Blog not found" });
  }

  res.status(200).json(blog);
};

const createBlog = async (req, res) => {
  const { title, description, author, date, image } = req.body;

  try {
    const blog = await Blog.create({ title, description, author, date, image });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const blog = await Blog.findByIdAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }

  res.status(200).json(blog);
};

const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const blog = await Blog.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }

  res.status(200).json(blog);
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
