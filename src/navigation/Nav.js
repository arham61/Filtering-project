import "./Nav.css";
import { AiOutlineShoppingCart,AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";


function Nav() {
  return (
    <nav>
    <div className="nav-container" >
      <input type="text"
      className="search-input"
      placeholder="Enter your Search Here" />
    </div>
    <div className="profile-container" >
      <a>
        <FiHeart className="nav-icons"/>
      </a>
      <a>
        <AiOutlineShoppingCart className="nav-icons" />
      </a>
      <a>
        <AiOutlineUserAdd className="nav-icons" />
      </a>
    </div>
    </nav>
  )
}

export default Nav