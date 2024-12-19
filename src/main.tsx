import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./Categories.tsx";
import About from "./About.tsx";
import BlogDetail from "./BlogDetail.tsx";
import NewBlog from "./NewBlog.tsx";
import Contact from "./Contact.tsx";
import CatBlogs from "./CatBlogs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
  {
    path: "/categories/:categories",
    element: <CatBlogs />,
  },
  {
    path: "/newblog",
    element: <NewBlog />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
