import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Root  from "./routes/root";
import ErrorPage from './error-page';
import Tiempo from './routes/tiempo';
import Home from "./routes/home";
import Futbol from "./routes/futbol";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tiempo",
        element: <Tiempo />,
      },
      {
        path: "futbol",
        element: <Futbol />,
      },
      {
        path: '/',
        element: <Home />,

      }
    ],
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);