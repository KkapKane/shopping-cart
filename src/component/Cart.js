import Item from "./Item"
import {useState} from 'react'


export default function Cart({cart,data, isCart}) {
 
 
  const [cartTotal, setCartTotal] = useState([])



    return (
        <div className="mainCartContainer">
         
          {cart.length > 0 ? <div className="cartContainer">{cart.map((c)=> {
            return (
              
                <div key={Math.random()} className="itemContainer"> 
               
            
                <Item item={data[c - 1]} isCart={isCart}/>
                
                </div>
            )
          })}</div > : 'cart is empty'}
        {cartTotal.length > 0 ? <div className="total">TOTAL</div> : null}
        </div>
        
    )
}