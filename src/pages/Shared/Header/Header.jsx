import logo from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center space-y-5 my-5">
            <img className="mx-auto lg:w-[500px] p-2" src={logo} alt="logo" />
            <p className="lg:text-2xl text-xl font-medium">Journalism Without Fear or Favour</p>
            <p className="text-base font-medium">{moment().format("dddd,  MMMM  D,  YYYY")}</p>
        </div>
    );
};

export default Header;