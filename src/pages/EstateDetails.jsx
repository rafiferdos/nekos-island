import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const { id } = useParams();
    const intId = parseInt(id);
    const data = useLoaderData();
    const estateDetail = data.find(estate => estate.id === intId)
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = estateDetail;
    return (
        <div className="lg:min-h-[calc(100vh-200px)] lg:py-0 my-8 md:my-12 flex items-center justify-center">
            <div className="card lg:card-side bg-base-100 shadow-2xl lg:max-w-6xl lg:px-10 md:px-5 px-2 py-5 md:py-16 ">
                <figure><img className="rounded-2xl" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2
                        className="card-title flex-wrap">
                        {estate_title}
                        <div
                            className={status === 'sale' ? "badge badge-secondary text-sm" : "badge badge-accent text-sm text-white"}>{status}
                        </div>
                        <div className="badge border-none bg-purple-100 text-purple-700">{segment_name}</div>

                    </h2>
                    <p>{description}</p>
                        <p className='font-bold'>Area: <span className='text-purple-600'>{area} acres</span></p>
                    <p className='font-bold my-2'>Price: <span className='text-purple-600'>{price}</span></p>
                    <div className="space-x-2 font-bold flex flex-wrap gap-2">
                        Facilities: 
                        {
                            facilities.map((facility, index) => {
                                return <div key={index} className='badge border-none bg-purple-100 text-purple-700'>{facility}</div>
                            })
                            
                        }</div>
                        <div className="badge border-purple-300 text-purple-700 mt-3"><FaLocationDot /> {location}</div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;