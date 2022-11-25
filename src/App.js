import HomePage from "./component/HomePage"
import Navbar from "./component/Navbar"
import './style/style.scss'
import {Route,Routes} from "react-router-dom"
import Cart from "./component/Cart";
import Shop from "./component/Shop";


function App() {

  return (
    <div className="App">

    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/shop" element={<Shop/>} />
    </Routes>


    </div>
  );
}

export default App;
