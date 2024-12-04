import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import testimonialBG1 from "../../assets/testimonial1.png";
import testimonialBG2 from "../../assets/testimonial2.png";
import testimonialBG3 from "../../assets/testimonial3.png";

import reviewer1 from "../../assets/reviewer1.png";
import reviewer2 from "../../assets/reviewer2.png";
import reviewer3 from "../../assets/reviewer3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Rating from "../../components/Rating";

const Testimonials = () => {
  // Example reviews data
  const reviews = [
    {
        name: 'Arjun Patel',
        review: 'KENWUD transformed my living room with stylish, high-quality furniture. Exceptional service and highly recommended!',
        image: reviewer1,
        coverImg: testimonialBG1,
        rating: 5,
    },
    {
        name: 'Priya Sharma',
        review: 'Thrilled with my custom furniture from KENWUD! Perfect fit and modern style. On-time delivery and great service.',
        image: reviewer2,
        coverImg: testimonialBG2,
        rating: 5,
    },
    {
        name: 'Amit Kumar',
        review: 'KENWUD offers premium furniture that suits any home style. Cozy and contemporary designs I love!',
        image: reviewer3,
        coverImg: testimonialBG3,
        rating: 4,
    },
    {
        name: 'Ananya Reddy',
        review: 'KENWUD’s elegant, practical designs transformed my dining space. Very satisfied with the custom-made furniture!',
        image: reviewer1,
        coverImg: testimonialBG1,
        rating: 5,
    },
    {
        name: 'Ravi Iyer',
        review: 'KENWUD’s sleek furniture transformed my office into a stylish, organized space. Excellent quality and service.',
        image: reviewer2,
        coverImg: testimonialBG2,
        rating: 4,
    },
    {
        name: 'Neha Verma',
        review: 'Love my KENWUD furniture! It adds a touch of luxury and warmth to my home. Stylish and affordable.',
        image: reviewer3,
        coverImg: testimonialBG3,
        rating: 5,
    },
    {
        name: 'Vikram Singh',
        review: 'KENWUD helped me choose the best furniture for my living room. Functional, stylish, and I’m very happy with it!',
        image: reviewer1,
        coverImg: testimonialBG1,
        rating: 5,
    },
    {
        name: 'Sonal Gupta',
        review: 'Impressed with KENWUD’s attention to detail. My custom sofa fits perfectly and is top quality!',
        image: reviewer2,
        coverImg: testimonialBG2,
        rating: 4,
    },
    // Add more reviews as needed...
];


  return (
    <div className="section-container px-8 md:px-12">
      {/* Subheading and Heading */}
      <div className="text-center mb-12">
        <p className="text-primary uppercase tracking-wide">Testimonials</p>
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="md:max-w-7xl mx-auto relative rounded"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            className=" bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url(${review.coverImg})` }}
          >
            <div className="md:h-[547px] flex  justify-center items-center mb-4">
              <div className="mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="size-20 absolute -top-5 left-1/2 -translate-x-1/2 rounded-full ring-2 ring-primary object-cover"
                />
                <div className="mt-16 text-center">
                  <h3 className="text-lg font-semibold dark:text-black">
                    {review.name}
                  </h3>
                  <p className=" mb-3 dark:text-black">Verified Customer</p>
                  <p className="text-gray-500 dark:text-black mb-4">
                    "{review.review}"
                  </p>

                  <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                    <Rating rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
