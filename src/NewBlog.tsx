import { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const blog = { title, description, author, date };

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      toast.success("Blog added succesfully!", {
        hideProgressBar: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redirect after 3 seconds
    });
  };

  return (
    <>
      <NavBar />
      <div className="m-32">
        <h2 className="flex justify-center">Add a New Blog</h2>
        <form onSubmit={handleSubmit} className="flex flex-col p-10 px-64">
          <label className="p-2">Blog title</label>
          <input
            type="text"
            className="border-2 rounded-lg"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label className="p-2">Description</label>
          <textarea
            className="border-2 rounded-lg"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <label className="p-2">Author</label>
          <input
            type="text"
            className="border-2 rounded-lg"
            required
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />

          <label className="p-2">Date</label>
          <input
            type="date"
            className="border-2 rounded-lg text-slate-500"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <label className="p-2">Image</label>
          <input
            type="file"
            placeholder="select image"
            className="border-2 rounded-lg"
          />

          <div className="flex justify-center m-2">
            <button className="m-2 p-2 w-40 rounded-lg bg-orange-400">
              Add Blog
            </button>
          </div>
        </form>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default NewBlog;
