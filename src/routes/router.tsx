import Error404Page from "@/pages/Error404Page";
import Page from "@/pages/Page/Page";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Page />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);

export default router;
