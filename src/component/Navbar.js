import { Link } from "react-router-dom"


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
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}