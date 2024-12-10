import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./Categories.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <div>404 Not Found</div>,
  },
  {
    path: "categories",
    element: <Categories />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
