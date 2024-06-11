import { Link } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    let location = useLocation();
    // console.log(location)
    const navigate = useNavigate(); 

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password)

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location ?.state ? location.state : "/" )
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
                        <form onSubmit={handleSignIn} className="card-body">
                            <h1 className="text-center text-base font-semibold">Login your account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
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
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="my-3">
                                <p className="text-base">Don Not Have An Account ? <Link to="/register" className="text-red-500">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;