import { Helmet } from "react-helmet-async";
import BannerCover from "../../Components/BannerCover";
import menuImage from "../../assets/menu/banner3.jpg";
import desertImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../Components/SectionHeading";
import MenuCategory from "./MenuCategory/MenuCategory";
// import PopularMenu from '../Home/PopularMenu'
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <BannerCover
        bgImage={menuImage}
        coverTitle={"Our Menu"}
        coverPara={"Would you like to try a dish?"}
      ></BannerCover>
      <SectionHeading
        subHeading="Don't Miss"
        heading="Today's O fer"
      ></SectionHeading>
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items */}
      <MenuCategory items={dessert} title={'Dessert'}  coverImg={desertImage}description={'This is very Nice for every one'}></MenuCategory>
      <MenuCategory items={pizza} title={'Pizza'}  coverImg={pizzaImage}description={'This is very Nice for every one'}></MenuCategory>
      <MenuCategory items={salad} title={'Salad'}  coverImg={saladImage}description={'This is very Nice for every one'}></MenuCategory>
      <MenuCategory items={soup} title={'Soup'}  coverImg={soupImage}description={'This is very Nice for every one'}></MenuCategory>
    </div>
  );
};

export default Menu;
