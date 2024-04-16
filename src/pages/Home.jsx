import Slider from "../components/Slider.jsx";
import Estates from "../components/Estates.jsx";
import {useLoaderData} from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='container mx-auto w-11/12 max-w-7xl'>
            <Slider/>
            <h1 className='lg:text-5xl md:text-3xl text-xl text-center lg:my-16 md:my-10 my-8'>Our <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Real Estate </span>Choices</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-4 md:mb-8 lg:mb-16'>
                {
                    data.map(estate => (
                        <Estates key={estate.id} estate={estate}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home