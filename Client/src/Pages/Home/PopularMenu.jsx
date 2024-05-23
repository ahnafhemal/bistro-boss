import SectionHeading from "../../Components/SectionHeading";
import MenuItem from "../../Components/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

const [menu]=useMenu()
const popular=menu.filter(item=>item.category==='popular')


  return (
    <section>
      <SectionHeading
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 lg:mx-24 mb-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
