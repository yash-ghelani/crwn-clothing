import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/loading/Loading";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUser,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/user-reducer";

import Navigation from "./routes/nav/Navigation";
// import Home from "./routes/home/Home";
// import Shop from "./routes/shop/Shop";
// import Accounts from "./routes/accounts/Accounts";
// import Checkout from "./routes/checkout/Checkout";

const Home = lazy(() => import("./routes/home/Home"));
const Shop = lazy(() => import("./routes/shop/Shop"));
const Accounts = lazy(() => import("./routes/accounts/Accounts"));
const Checkout = lazy(() => import("./routes/checkout/Checkout"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUser(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<LoadingScreen/>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
