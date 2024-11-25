
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Hero from "./Hero";

const HeroContainer = () => {
    return (
        <section>
             <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Hero></Hero>
        </SwiperSlide>
      </Swiper>
        </section>
    );   
};

export default HeroContainer;