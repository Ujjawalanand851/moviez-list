import { Link } from "react-router-dom"
import "../css/Navbar.css"

function Navbar(){
   return (<nav className="navbar">
    <div className="nav-brand">
<Link to= "/" >Movie app </Link>
    </div>

<div className="navbar-links">
    <Link to="/">Home</Link>
    <Link to="/favorites">Favorites</Link>
</div>
   </nav>)


}
export default Navbar