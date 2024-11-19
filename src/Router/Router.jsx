
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Main/Main";
import ErrorPage from "../Pages/ErrorPage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);

  export default router;