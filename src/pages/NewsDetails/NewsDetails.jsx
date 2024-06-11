import { FaArrowLeft, FaCalendar } from "react-icons/fa6";
import picture1 from "../../assets/1.png"
import Header from "../Shared/Header/Header";
import RigthSide from "../Shared/RigthSide/RigthSide";
import { Link } from "react-router-dom";
import {useLoaderData, useParams } from "react-router-dom";


const NewsDetails = () => {
    const news = useLoaderData()
    // console.log(news)
    const {id} = useParams()
    const intId = parseInt(id)
    // console.log(intId)
    const newsPepar = news.find(news => news._id == intId)
    // console.log(newsPepar)

    return (
        <div>
            {/* header area  */}
            <div>
                <Header></Header>
            </div>

            {/* contant area  */}
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 p-2 items-baseline">
                {/* left side area  */}

                <div className="lg:col-span-3">
                    <div className="p-2">
                        <div>
                            <h1 className="text-base font-semibold">Dragon News</h1>
                        </div>
                    </div>

                    {/* card area  */}
                    <div className="p-2 border-2 my-2">
                        <div className="mt-3">
                            <img className="w-[1000px] mt-2" src={newsPepar.image_url} alt="img" />
                            <h4 className="mt-2 text-base font-semibold">{newsPepar.title}</h4>
                            <p className="mt-2 text-base">{newsPepar.details}</p>
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-secondary"><FaArrowLeft></FaArrowLeft><Link to="/"> All news in this category</Link></button>
                        </div>
                    </div>

                    <div className="p-2">
                        <div>
                            <h1 className="text-base font-semibold">Editors Insight</h1>
                        </div>
                        <div className="flex lg:flex-row flex-col mt-5">
                            <div className="lg:w-[300px] w-[250px] space-y-2">
                                <img src={picture1} alt="img" />
                                <div className="text-base font-semibold">
                                    <h4>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <p className="text-base font-medium">Sports</p>
                                    <p className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 4, 2022</p>
                                </div>
                            </div>

                            <div className="lg:w-[300px] w-[250px] space-y-2">
                                <img src={picture1} alt="img" />
                                <div className="text-base font-semibold">
                                    <h4>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <p className="text-base font-medium">Sports</p>
                                    <p className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 4, 2022</p>
                                </div>
                            </div>

                            <div className="lg:w-[300px] w-[250px] space-y-2">
                                <img src={picture1} alt="img" />
                                <div className="text-base font-semibold">
                                    <h4>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <p className="text-base font-medium">Sports</p>
                                    <p className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 4, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* rigth side area  */}
                <div>
                    <RigthSide></RigthSide>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;