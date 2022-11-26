import HomePage from "./component/HomePage"
import Navbar from "./component/Navbar"
import './style/style.scss'
import {Route,Routes} from "react-router-dom"
import {useState,useEffect} from 'react';
import Cart from "./component/Cart";
import Shop from "./component/Shop";
import axios from 'axios'

function App() {
  const [cart,setCart] = useState([])

  const addCart = (id) => {
  
          setCart([...cart, id])
          console.log(cart)
  }

  
const [loading, setLoading] = useState(false);
const [data,setData] = useState([]);

useEffect(()=> {
        setLoading(true)
  axios({
        method: "GET",
        url: "https://fakestoreapi.com/products"})
        .then(res => {
                console.log(res.data)
                setData(res.data)
        }).catch(e=> console.log(e))
        .finally(() => setLoading(false))      
}, [])
  
  return (
    <div className="App">

    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/cart" element={<Cart cart={cart} data={data}/>} />
      <Route path="/shop" element={<Shop addCart={addCart} loading={loading} data={data}/>} />
    </Routes>


    </div>
  );
}

export default App;
