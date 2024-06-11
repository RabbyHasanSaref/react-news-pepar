import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
const Root = () => {
    return (
        <div className="font-Poppins container mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;