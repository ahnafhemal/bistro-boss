import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import image1 from "../../../src/assets/home/slide1.jpg";
import image2 from "../../../src/assets/home/slide2.jpg";
import image3 from "../../../src/assets/home/slide3.jpg";
import image4 from "../../../src/assets/home/slide4.jpg";
import image5 from "../../../src/assets/home/slide5.jpg";
import SectionHeading from "../../Components/SectionHeading";

const Category = () => {
  return (
    <section>
      <SectionHeading
        subHeading={"ORDER ONLINE"}
        heading={"---From 11:00am to 10:00pm---"}
      ></SectionHeading>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
          <h3 className="text-lg lg:text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <h3 className="text-lg lg:text-4xl uppercase text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <h3 className="text-lg lg:text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
          <h3 className="text-lg lg:text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
          <h3 className="text-lg lg:text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
