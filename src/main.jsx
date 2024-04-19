import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { Favorites } from "./pages/favorites/Favorites.jsx";
import { Cart } from "./pages/cart/Cart.jsx";
import { Notification } from "./pages/notification/Notification.jsx";
import { Product } from "./pages/Products/Product.jsx";
import { Search } from "./pages/home/components/Search.jsx";
import { Categories } from "./pages/home/components/Categories.jsx";
import { ApiProvider } from "./ApiProvider.jsx";

const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
