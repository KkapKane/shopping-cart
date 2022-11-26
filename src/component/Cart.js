import Item from "./Item"



export default function Cart({cart,data}) {
 



    return (
        <div className="mainCartContainer">
         
          {cart.length > 0 ? <div className="cartContainer">{cart.map((c)=> {
            return (
               
                <div key={Math.random()} className="itemContainer"> 
               
                <Item item={data[c]}/>
             
                </div>
            )
          })}</div > : 'cart is empty'}
        <div className="total">TOTAL</div>
        </div>
        
    )
}