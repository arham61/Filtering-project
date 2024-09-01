import { BsFillBagHeartFill } from "react-icons/bs";
// import { AiFillStar } from "react-icons/ai";


const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
        <img src={img} className="card-img" alt={title} />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </div>
          <div className="card-price">
            <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag" >
              <BsFillBagHeartFill/>
            </div>
        </div>
      </section>
  )
}

export default Card