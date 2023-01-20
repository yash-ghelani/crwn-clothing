import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user";
import { CategoryProvider } from "./contexts/category";
import "./index.css";
import { CartProvider } from "./contexts/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <CategoryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoryProvider>
    </UserProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
