import { Link } from "react-router-dom";
import BannerCover from "../../../Components/BannerCover";
import MenuItem from "../../../Components/MenuItem";
import "../../../Css/menu.css";

const MenuCategory = ({ items, title, coverImg, description }) => {
  console.log(title);
  return (
    <div>
      {title && (
        <BannerCover
          bgImage={coverImg}
          coverTitle={title}
          coverPara={description}
        ></BannerCover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 lg:mx-24 my-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex  justify-center">
        <Link to={`/order/${title}`} className="menuBtn mb-5 font-bold ">
          Order Your Favorites {title}
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
