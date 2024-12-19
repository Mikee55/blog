import { useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

import { useEffect, useState } from "react";
import BlogList from "./BlogList";

interface Blog {
  category: string;
}

const CatBlogs = () => {
  const { category } = useParams<{ category: string }>();
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(`/api/blogs/`)
      .then((res) => {
        return res.json();
      })
      .then((data: Blog[]) => {
        setBlogs(data);
      });
  }, []);

  useEffect(() => {
    if (blogs) {
      setFilteredBlogs(
        blogs.filter((blog: any) => {
          return blog.category === category;
        })
      );
    }
  }, [blogs, category]);

  return (
    <>
      <NavBar />
      <div className="mx-40 my-32">
        {blogs && <BlogList blogs={filteredBlogs} />}
      </div>
      <Footer />
    </>
  );
};

export default CatBlogs;
