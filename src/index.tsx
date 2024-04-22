import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPages } from "./Pages/MainPages";
import { Catalog } from "./Pages/Catalog";
import { Product } from "./Pages/Product";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPages />,
      },
      {
        path: "/Catalog",
        element: <Catalog />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
