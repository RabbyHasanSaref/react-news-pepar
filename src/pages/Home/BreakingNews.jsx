import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="p-2 flex items-center my-5">
            <button className="btn btn-secondary lg:w-[150px]">Breaking News</button>
            <Marquee pauseOnHover speed={80} className="text-red-500 font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default BreakingNews;