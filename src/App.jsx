import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/Regester";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";
import { usernamecontext } from "./context/usernamecontext";
import {Cartcontext} from "./context/Cartcontext"
import Product from "./pages/Proudact";
import Cart from "./pages/Cart";
import { Countercontext } from "./context/Countercontext";

function App() {
  const [username, setUsername] = useState("");
  const [cart,setcart]=useState([])
  const[counter,setcounter]=useState(1)
  return (
    <usernamecontext.Provider value={{ username, setUsername }}>
      <Cartcontext.Provider value={{ cart, setcart }}>
        <Countercontext.Provider value={{counter,setcounter}}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        </Countercontext.Provider>
        </Cartcontext.Provider>
    </usernamecontext.Provider>
  );
}

export default App;
