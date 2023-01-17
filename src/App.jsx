import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/nav/Navigation';

import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import SignIn from "./routes/sign-in/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
