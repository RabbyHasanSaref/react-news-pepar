import { FaCalendar } from "react-icons/fa";
import picture1 from "../../../assets/1.png"
import picture2 from "../../../assets/2.png"
import picture3 from "../../../assets/3.png"
import { useEffect, useState } from "react";
const LeftSide = () => {
    const [category, setCategory] = useState([])
    // console.log(category)

    // category data fetch 
    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="p-2">
            {/* Caterogy area  */}
            <div className="mb-2">
                <h1 className="text-base font-semibold">All Caterogy</h1>
            </div>
            <div>
                <p className="text-center bg-gray-300 h-10 flex items-center justify-center rounded-lg text-base font-semibold">National News</p>
            </div>
            <div className="text-center text-base font-medium space-y-2 mt-2">
                {
                    category.map(categori => <p key={categori.id}>{categori.name}</p>)
                }
            </div>

            {/* Caterogy itme area  */}
            <div className="my-5">
                <div className="lg:w-[300px] w-[250px] mx-auto space-y-2">
                    <img src={picture1} alt="img" />
                    <div className="text-base font-semibold">
                        <h4>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="text-base font-medium">Sports</p>
                        <p className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 4, 2022</p>
                    </div>
                </div>
                <div className="lg:w-[300px] w-[250px] mx-auto space-y-2 mt-3">
                    <img src={picture2} alt="img" />
                    <div className="text-base font-semibold">
                        <h4>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="text-base font-medium">Sports</p>
                        <p className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 4, 2022</p>
                    </div>
                </div>

                <div className="lg:w-[300px] w-[250px] mx-auto space-y-2 mt-3">
                    <img src={picture3} alt="img" />
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
    );
};

export default LeftSide;