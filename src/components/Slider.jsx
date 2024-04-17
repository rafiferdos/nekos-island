// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {EffectFade, Navigation, Pagination, Autoplay} from 'swiper/modules';

import img1 from '../../src/assets/image1.jpeg'
import img2 from '../../src/assets/image2.jpg'
import img3 from '../../src/assets/image3.jpg'


const Slider = () => {
    return (
        <div className='lg:min-h-[calc(100vh-200px)] mt-5 md:mt-8 lg:mt-16' data-aos="fade-up">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper rounded-2xl"
            >
                <SwiperSlide>
                    <img src={img1} alt={'cover image'}/>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <p className="text-white lg:text-5xl w-3/5 text-center">Having a booring day? just come, we are waiting for your visit</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt={'cover image'}/>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <p className="text-white lg:text-5xl w-3/5 text-center">We have astounding collection of estates that will blow your mind up</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt={'cover image'}/>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <p className="text-white lg:text-5xl w-3/5 text-center">Feel free to go deep, We will always be there for you, Best Wishes</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;