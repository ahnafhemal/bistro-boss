import BannerCover from "../../../Components/BannerCover";
import MenuItem from "../../../Components/MenuItem";

const MenuCategory = ({ items, title, coverImg, description }) => {
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
    </div>
  );
};

export default MenuCategory;
