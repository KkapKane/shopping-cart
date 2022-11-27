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
  
          setCart([...cart, id ])
          
     
          
  }

const [isCart,setIsCart] = useState(false)
const [loading, setLoading] = useState(false);
const [data,setData] = useState([]);


function handleCart(s) {
  setIsCart(s)
 
  
}




//fetch api and store data in a state
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

    <Navbar handleCart={handleCart} cart={cart}/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/cart" element={   <Cart cart={cart} data={data} isCart={isCart} handleCart={handleCart} addCart={addCart} setCart={setCart}/>} />
      <Route path="/shop" element={<Shop addCart={addCart} loading={loading} data={data} isCart={isCart} handleCart={handleCart}/>} />
    </Routes>


    </div>
  );
}

export default App;
