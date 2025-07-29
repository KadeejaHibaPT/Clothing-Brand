import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Local image imports
import jacketImg from "../assets/jacket.jpg";
import dressImg from "../assets/dress.jpg";
import sweaterImg from "../assets/sweater.jpg";
import trenchcoatImg from "../assets/trenchcoat.jpg";

// ✅ Product data
const products = [
  {
    title: "SOFT LEATHER JACKETS",
    desc: "Scelerisque duis aliquam qui lorem ipsum dolor amet.",
    image: jacketImg,
  },
  {
    title: "VINTAGE SUMMER DRESS",
    desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
    image: dressImg,
  },
  {
    title: "OUT CROP SWEATER",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio.",
    image: sweaterImg,
  },
  {
    title: "CLASSIC TRENCH COAT",
    desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    image: trenchcoatImg,
  },
];

// ✅ Swiper component
const ProductSwiper = () => {
  return (<>
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-center mb-12 text-primary tracking-tight leading-tight drop-shadow-lg">
        NEW COLLECTIONS
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="group"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className=" max-w-sm mx-auto flex flex-col items-center text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[400px] object-cover rounded-t-xl "
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 uppercase mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 px-2">{product.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div></>
  );
};

export default ProductSwiper;
