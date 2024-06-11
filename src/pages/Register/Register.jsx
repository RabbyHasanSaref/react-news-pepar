import { useContext } from "react";
import Navbar from "../Shared/NavBar/Navbar";
import { AuthContext } from "../../Auth/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { createNewUser } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handleCreateUser = (e) => {
        e.preventDefault()
        const check = e.target.checkbox.checked
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password, check)

        createNewUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate("/")
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:w-[600px] min-h-screen mx-auto mt-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleCreateUser} className="card-body">
                            <h1 className="text-center text-base font-semibold">Register your account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox" /> Accept Term & Conditions
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="my-3">
                                <p className="text-base">Already Have An Account ? <Link to="/login" className="text-red-500">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;