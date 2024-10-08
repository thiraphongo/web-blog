import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import "./output.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Login from "./pages/Login"
import AuthorPosts from "./pages/AuthorPosts";
import Register from "./pages/Register";
import CategoryPosts from "./pages/CategoryPosts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "posts/users/sdfsdf", element: <AuthorPosts /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> }
    ]
  },
  {
    path: "login", element: <Login />
  },
  {
    path: "register", element: <Register />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
