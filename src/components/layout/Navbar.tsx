// import Logo from "@/assets/Logo";
import logo from "../../assets/hot-air-balloon-svgrepo-com.svg";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 gap-3 px-5">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-10" />
        <span className="font-bold py-3 text-xl">Task</span>
      </div>
    </nav>
  );
};

export default Navbar;
