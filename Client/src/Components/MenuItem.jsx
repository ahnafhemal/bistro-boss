const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-4 space-x-4">
      <img style={{borderRadius:'0 200px 200px'}}  className="w-[75px] lg:w-[100px]" src={image} alt="" />
      <div>
        <h4>{name}---------</h4>
        <p>{recipe}</p>
      </div>
      <h4 className="text-[#BB8506] font-bold">${price}</h4>
    </div>
  );
};

export default MenuItem;
