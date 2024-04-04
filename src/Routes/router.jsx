import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
