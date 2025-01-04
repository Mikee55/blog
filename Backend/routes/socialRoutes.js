const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");
const authMiddleware = require("../authMiddleware");

router.post("/:postId/like", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const blog = await Blog.findById(postId);

    if (!blog) {
      return res.status(400).json({ messae: "Blog not found" });
    }

    if (blog.likes.includes(req.userId)) {
      await Blog.findByIdAndUpdate(postId, { $pull: { likes: req.userId } });
    } else {
      await Blog.findByIdAndUpdate(postId, { $push: { likes: req.userId } });
    }
    console.log(req.userId);

    const updatedBlog = await Blog.findById(postId); // Fetch updated blog data
    res.json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ messae: "Server Error" });
  }
});

router.post("/:postId/comment", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const blog = await Blog.findById(postId);
    const { comment } = req.body;

    if (!blog) {
      return res.status(400).json({ message: "Blog not found" });
    }

    await Blog.findByIdAndUpdate(postId, {
      $push: { comments: { content: comment } },
    });

    console.log(comment);

    const updatedBlog = await Blog.findById(postId); // Fetch updated blog data
    res.json(updatedBlog);
  } catch (error) {
    console.error("Error fetching comment", error);
    res.status(500).jsosn({ message: "Server Error" });
  }
});

module.exports = router;
