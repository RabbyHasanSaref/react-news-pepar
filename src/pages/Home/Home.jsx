import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/NavBar/Navbar";
import RigthSide from "../Shared/RigthSide/RigthSide";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from 'react-router-dom';
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

const Home = () => {
    const news = useLoaderData();
    //data load see all btn state 
    const [dataLength, setDataLength] = useState(2)
    // console.log(news)
    return (
        <div>
            {/* header area  */}
            <div>
                <Header></Header>
            </div>

            {/* breaking news area  */}
            <div>
                <BreakingNews></BreakingNews>
            </div>

            {/* navbar area  */}
            <div>
                <Navbar></Navbar>
            </div>

            {/* contant area  */}
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 p-2 items-baseline">
                {/* left side area  */}
                <div>
                    <LeftSide></LeftSide>
                </div>



                <div className="lg:col-span-2">
                    <div className="p-2">
                        <div>
                            <h1 className="text-base font-semibold">Dragon News Home</h1>
                        </div>
                    </div>

                    {/* card area  */}
                    {
                        news.slice(0, dataLength).map((anews) => <NewsCard key={anews._id} anews={anews}></NewsCard>)
                    }
                    <div className={dataLength === news.length ? 'hidden' : ''}>
                        <button onClick={() => setDataLength(news.length)} className="btn btn-primary">See All News</button>
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

export default Home;