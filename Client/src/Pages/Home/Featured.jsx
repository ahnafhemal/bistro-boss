import { Link } from "react-router-dom";
import SectionHeading from "../../Components/SectionHeading";
import featuredImg from "../../assets/home/featured.jpg";
import '../../Css/Featured.css'



const Featured = () => {
  return (
    <div className="featured-item pt-10 pb-16 mb-8 bg-opacity-80" style={{backgroundImage: `url(${featuredImg})`}}>
      <SectionHeading
        subHeading="Featured Item"
        heading="check it out"
      ></SectionHeading>
      <div className="md:flex justify-center  items-center gap-10 bg-slate-950
      bg-opacity-5 px-10 lg:px-24">
        <div>
          <img  src={featuredImg} alt="" />
        </div>
        <div className="text-white">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where Can i ge Some</p>
          <p className="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            corrupti, iste assumenda dignissimos nam temporibus mollitia
            provident ab repudiandae voluptatum, sint illo aspernatur, id
            eveniet quas! Odit odio veniam reiciendis, illum officia ab, hic
            debitis deleniti explicabo aspernatur magni tenetur impedit ea
            libero nobis, numquam nostrum mollitia doloremque dolorem
            voluptatibus?
          </p>
          <Link className="orderBtn border-b-2 font-bold">Order Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
