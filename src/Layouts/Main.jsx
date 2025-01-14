import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import useAuth from "../hooks/UseAuth";

const Main = () => {
    const { darkMode } = useAuth()
    return (
        <div className={`${darkMode ? 'bg-black' : ' bg-white text-black'}`}>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;