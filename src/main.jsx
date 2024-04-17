import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { Favorites } from "./pages/favorites/Favorites.jsx";
import { Cart } from "./pages/cart/Cart.jsx";
import { Notification } from "./pages/notification/Notification.jsx";
import { ApiProvider } from "./ApiProvider.jsx";

// let items = [
//   {
//     id: 1,
//     title: "Coffe",
//     img: "/",
//     desc: "With Steamed Milk",
//     category: "Coffe",
//     price: "4.20",
//     rating: "4.5",
//   },
//   {
//     id: 2,
//     title: "Coffe",
//     img: "/",
//     desc: "With Steamed Milk",
//     category: "Coffe",
//     price: "4.20",
//     rating: "4.2",
//   },
//   {
//    //     id:3,
//     title: "Beans",
//     img: "/",
//     desc: "Medium Roasted",
//     category: "Coffe",
//     price: "4.20",
//     rating: "4.5",
//   },
//   {
//     //     id: 4,
//     title: "Beans",
//     img: "/",
//     desc: "Medium Roasted",
//     category: "Coffe",
//     price: "4.20",
//     rating: "4.2",
//   },
// ];

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
