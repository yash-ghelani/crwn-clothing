import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/nav/Navigation";
import { useDispatch } from "react-redux";

import { onAuthStateChangedListener, createUser } from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/user-action";

import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Accounts from "./routes/accounts/Accounts";
import Checkout from "./routes/checkout/Checkout";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUser(user);
      }
      // dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
