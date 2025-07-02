// import Logo from "@/assets/Logo";
import { Link } from "react-router";
import logo from "../../assets/hot-air-balloon-svgrepo-com.svg";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 gap-3 px-5 flex justify-start items-center">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-10" />
        <span className="font-bold py-3 text-xl">Task</span>
      </div>
      <div className="space-x-2">
        <Link to="/users">Users</Link>
        <Link to="/">Tasks</Link>
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
