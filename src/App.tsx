import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
// import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      {/* <h1>Basic Todo App</h1> */}
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
