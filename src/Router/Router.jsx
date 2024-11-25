
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Pages/ErrorPage";
import Instructor from "../Pages/Instructor";
import Classes from "../Pages/Classes";
import Home from "../Home/Home";


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
        {
          path: "/instructor",
          element: <Instructor></Instructor>,
        },
        {
          path: "/classes",
          element: <Classes></Classes>,
        },
      ],
    },
  ]);

  export default router;                               