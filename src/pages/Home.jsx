import Slider from "../components/Slider.jsx";
import Estates from "../components/Estates.jsx";
import {useLoaderData} from "react-router-dom";
import Features from "../components/Features.jsx";
import ContactUs from "../components/ContactUs.jsx";
import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
const Home = () => {
    const data = useLoaderData()
    return (
        <div className='container mx-auto w-11/12 max-w-7xl'>
            <Helmet>
                <title>Neko&apos;s Island | Home</title>
            </Helmet>
            <Slider/>
            <h1 className='lg:text-5xl md:text-3xl text-xl text-center lg:my-16 md:my-10  font-bold' data-aos="fade-up" data-aos-duration="1500">Our <span
                className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi'>Real Estate </span>Choices
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-4 md:mb-8 lg:mb-16' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
                {
                    data.map(estate => (
                        <Estates key={estate.id} estate={estate}/>
                    ))
                }
            </div>
            <h1 className='lg:text-5xl md:text-3xl text-xl text-center lg:mt-8 md:my-3 my-2 font-bold' data-aos="fade-up" data-aos-duration="1500"> Our <span className='font-madimi bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Features</span>
            </h1>
            <Features/>
            <h1 className='lg:text-5xl md:text-3xl text-xl text-center lg:my-4 md:my-3 my-2 font-bold' data-aos="fade-up" data-aos-duration="1500">Contact <span
                className='font-madimi bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Us</span>
            </h1>
            <ContactUs/>
        </div>
    )
}

export default Home