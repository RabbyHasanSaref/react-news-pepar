import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Protect = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    let location = useLocation();
    console.log(location)
    if(loader){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Protect;