import {FaLocationDot} from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";


// eslint-disable-next-line react/prop-types
const Estates = ({estate}) => {

    // eslint-disable-next-line react/prop-types
    const {estate_title, segment_name, description, price, status, area, location, facilities, image} = estate;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-2xl">
            <figure>
                <img className='p-3 rounded-3xl' src={image} alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {estate_title}
                </h2>
                <p className='opacity-60'>{description}</p>
                <div className="card-actions justify-between items-center">
                    <p className='font-bold'>Area: <span className='text-purple-600'>{area} acres</span></p>
                    <div className="badge"><FaLocationDot/> {location}</div>
                </div>
                <button className='btn bg-purple-100 hover:bg-purple-500 hover:text-white mt-5'>View Property <CiLocationArrow1 className='text-xl font-extrabold ' /></button>
            </div>
        </div>
    );
};

export default Estates;