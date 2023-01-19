import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/nav/Navigation";

import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Accounts from "./routes/accounts/Accounts";
import Checkout from "./routes/checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
