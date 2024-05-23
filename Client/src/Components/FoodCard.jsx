import { Link } from "react-router-dom";
import "../Css/foodCard.css";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-gray-200 shadow-xl rounded-none">
      <figure>
        <img
          src={image}
          alt="food Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p><span className="font-bold text-xl">Price: </span>${price}</p>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <Link className="addCardBtn border-b-2 font-bold uppercase">
            Add To Card
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
