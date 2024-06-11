import { FaBookBookmark, FaEye, FaShare, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({anews}) => {
    const {author, title, image_url, details, rating, total_view, _id} = anews;
    // console.log(anews)
    return (
        <div className="p-2 border-2 my-2">
            <div className="flex justify-between items-center bg-gray-300 p-2 rounded-lg">
                <div className="flex items-center gap-3">
                    <img className="w-[45px] rounded-full" src={author.img} alt="img" />
                    <div>
                        <p className="text-base font-semibold">{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaBookBookmark></FaBookBookmark>
                    <FaShare></FaShare>
                </div>
            </div>
            <div className="mt-3">
                <h4 className="text-base font-semibold">{title}</h4>
                <img className="w-[800px] mt-2" src={image_url} alt="img" />
                {
                    details.length > 200 ?
                     <p className="mt-2 text-base">{details.slice(0, 200)}<Link to={`/newsdetails/${_id}`} className="text-base font-semibold text-blue-500">Read More</Link></p> : 
                     <p className="mt-2 text-base">{details}</p>
                }
                
            </div>
            <div className="mt-2">
                <hr />
                <div className="flex justify-between mt-2">
                    <div className="flex items-center gap-3">
                        <FaStar className="text-orange-400"></FaStar>
                        <FaStar className="text-orange-400"></FaStar>
                        <FaStar className="text-orange-400"></FaStar>
                        <FaStar className="text-orange-400"></FaStar>
                        <FaStar className="text-orange-400"></FaStar>
                        <div>
                            <p>{rating.number}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaEye></FaEye>
                        <div>
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;