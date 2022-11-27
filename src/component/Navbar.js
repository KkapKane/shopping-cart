import { Link } from "react-router-dom"
import { AiOutlineShoppingCart} from "react-icons/ai";
import Cart from "./Cart";

export default function Navbar({handleCart,cart}){
    return (
        <nav>
            <Link to="/" className="site-Title">
               Shop Name
            </Link>
            <ul>
                <li>
                    <Link to="/shop" onClick={()=>handleCart(false)} >Shop</Link>
                </li>
                <li>
                    <Link to="/cart" onClick={()=>handleCart(true)} >
                        <div className="cartIconContainer" style={{display:'flex'}}>
                        <AiOutlineShoppingCart/>
                        {cart.length > 0 ? <div style={{color: 'orangered'}}>{cart.length}</div>  : null} 
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}