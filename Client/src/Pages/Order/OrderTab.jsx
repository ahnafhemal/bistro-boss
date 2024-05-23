import FoodCard from "../../Components/FoodCard";

const OrderTab = ({itemName}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
        {itemName.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    );
};

export default OrderTab;