import SectionHeading from "../../Components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionHeading
        heading="---What Our Clients Say---"
        subHeading="TESTIMONIALS"
      ></SectionHeading>
      <div className="mx-10 lg:mx-24 mb-8">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper text-center"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-10 my-8 lg:mx-20 flex flex-col items-center gap-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                ></Rating>
                <p>{review.details}</p>
                <h3 className="text-2xl">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
