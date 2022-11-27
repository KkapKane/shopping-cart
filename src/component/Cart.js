import Item from "./Item"
import {useState} from 'react'


export default function Cart({cart,data, isCart}) {


  const uniqueItem = cart.filter((e, i, a) => a.indexOf(e) === i)

  const total = cart.reduce((p , c)=>{
      return p + c.price
  }, 0)

  
    return (
        <div className="mainCartContainer">
       
          
          
          
          {cart.length > 0 ? 
         
          <div className="cartContainer">{uniqueItem.sort((a , b)=> (a.id - b.id)).map((c)=> {
           
            return (
             
                <div key={Math.random()} className="itemContainer"> 

            
                <Item item={c} isCart={isCart} cart={cart}/>
                
                </div>
            )
          })}</div > : 'cart is empty'}
         
        {cart.length > 0 ? <div className="total">TOTAL: ${Math.round(total * 100) / 100} </div> : null}
        </div>
        
    )
}