import {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import {EffectFade, Navigation, Pagination, Autoplay} from 'swiper/modules';

import img1 from '../../src/assets/image1.jpeg'
import img2 from '../../src/assets/image2.jpg'
import img3 from '../../src/assets/image3.jpg'


const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='lg:min-h-[calc(100vh-200px)] mt-5 md:mt-8 lg:mt-16'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 1500,
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
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt={'cover image'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt={'cover image'}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;