import { BsFillBagHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";


const Card = () => {
  return (
    <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" className="card-img" />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <div className="card-reviews">
            <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
            <span className="total-reviews">5</span>
          </div>
          <div className="card-price">
            <del>$300</del> $200
            </div>
            <div className="bag" >
              <BsFillBagHeartFill/>
            </div>
        </div>
      </section>
  )
}

export default Card