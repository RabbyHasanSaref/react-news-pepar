import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import picture1 from "../../../assets/qZone1.png"
import picture2 from "../../../assets/qZone2.png"
import picture3 from "../../../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
const RigthSide = () => {
    const { createGoogle } = useContext(AuthContext)
    const handleGoogle = () => {
        createGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="p-2">
            {/* login area  */}
            <div className="mb-2">
                <h1 className="text-base font-semibold">Login With</h1>
            </div>
            <div className="space-y-5">
                <div>
                    <button onClick={handleGoogle} className="btn w-full"><FaGoogle></FaGoogle> Login With Google</button>
                </div>
                <div>
                    <button className="btn w-full"><FaGithub></FaGithub> Login With GitHub</button>
                </div>
            </div>

            {/* find area  */}
            <div className="mt-2">
                <h1 className="text-base font-semibold">Find Us On</h1>
            </div>
            <div className="my-2">
                <p className="flex items-center gap-2 border-2 rounded-t-lg p-2"><FaFacebook></FaFacebook> Facebook</p>
                <p className="flex items-center gap-2 border-x-2 p-2"><FaTwitter></FaTwitter> Twitter</p>
                <p className="flex items-center gap-2 border-2 p-2 rounded-b-lg"><FaInstagram></FaInstagram> Instagram</p>
            </div>

            {/* Q-Zone  */}
            <div className="mt-2">
                <h1 className="text-base font-semibold">Q-Zone</h1>
            </div>
            <div className="space-y-2 my-2">
                <div className="border-2 border-dashed">
                    <img className="mx-auto p-3" src={picture1} alt="img" />
                </div>
                <div className="border-2 border-dashed">
                    <img className="mx-auto p-3" src={picture2} alt="img" />
                </div>
                <div className="border-2 border-dashed">
                    <img className="mx-auto p-3" src={picture3} alt="img" />
                </div>
            </div>

            {/* ad area  */}

            <div className="text-center space-y-5 my-2">
                <h2 className="text-2xl font-semibold">Create an Amazing Newspaper</h2>
                <p className="text-base font-semibold p-3">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn btn-secondary">Learn More</button>
            </div>
        </div>
    );
};

export default RigthSide;