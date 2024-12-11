import Footer from "./Footer";
import NavBar from "./NavBar";

import { useEffect, useState } from "react";

import BlogList from "./BlogList";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const [blogs, setBlogs] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);

  const handleClick = () => {
    fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <NavBar />
      <div className="mx-40 mt-32">
        {blogs && <BlogList blogs={[blogs]} isSingleBlog={true} />}
      </div>
      <div className="flex justify-center m-10">
        <button
          onClick={handleClick}
          className="p-1 px-3 rounded-2xl bg-slate-300"
        >
          Delete
        </button>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetail;
