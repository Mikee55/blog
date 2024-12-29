require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const blogsRoutes = require("./routes/blogsRoutes");
const userRoutes = require("./routes/userRoutes");
const socialRoutes = require("./routes/socialRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/blogs", blogsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", socialRoutes);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to DB and Server listening on port`,
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
