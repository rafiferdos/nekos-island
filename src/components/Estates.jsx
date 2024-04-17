import {FaLocationDot} from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Estates = ({estate}) => {

    // eslint-disable-next-line react/prop-types
    const {estate_title, id, description, price, status, area, location, image} = estate;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-2xl">
            <figure>
                <img className='p-3 rounded-3xl' src={image} alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title items-start justify-between">
                    {estate_title}
                    <div
                        className={status === 'sale' ? "badge badge-secondary text-sm" : "badge badge-accent text-sm text-white"}>{status}
                    </div>
                </h2>
                <p className='opacity-60'>{description}</p>
                <p className='font-bold my-2'>Price: <span className='text-purple-600'>{price}</span></p>
                <div className="card-actions justify-between items-center">
                    <p className='font-bold'>Area: <span className='text-purple-600'>{area} acres</span></p>
                    <div className="badge border-purple-300 text-purple-700"><FaLocationDot/> {location}</div>
                </div>
                <Link to={`estate/${id}`} className='btn bg-purple-100 hover:bg-purple-500 hover:text-white mt-5'>View
                    Property <CiLocationArrow1 className='text-xl font-extrabold '/></Link>
            </div>
        </div>
    );
};

export default Estates;