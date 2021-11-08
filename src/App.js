import "./styles.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import { ContextProvider } from "./Context";

export default function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}
