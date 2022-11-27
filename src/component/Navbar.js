import { Link } from "react-router-dom"
import { AiOutlineShoppingCart} from "react-icons/ai";

export default function Navbar({handleCart}){
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
                        <AiOutlineShoppingCart/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}