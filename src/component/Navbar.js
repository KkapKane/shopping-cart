import { Link } from "react-router-dom"
import { AiOutlineShoppingCart} from "react-icons/ai";

export default function Navbar(){
    return (
        <nav>
            <Link to="/" className="site-Title">
               Shop Name
            </Link>
            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">
                        <AiOutlineShoppingCart/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}