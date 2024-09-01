import "./Sidebar.css"
import {AiOutlineShoppingCart} from "react-icons/ai";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar({handleChange}) {

  return (
    <div className="sidebar">
        <section className="logo-container">
           <h1> <AiOutlineShoppingCart/> </h1>
        </section>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar