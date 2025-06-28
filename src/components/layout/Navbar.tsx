// import Logo from "@/assets/Logo";
import { Link } from "react-router";
import logo from "../../assets/hot-air-balloon-svgrepo-com.svg";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 gap-3 px-5">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-10" />
        <span className="font-bold py-3 text-xl">Task</span>
      </div>
      <Link to="/users">Users</Link>
      <Link to="/">Tasks</Link>
    </nav>
  );
};

export default Navbar;
