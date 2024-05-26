import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") ||location.pathname.includes("register")

  return (
    <div>
      {noHeaderFooter  || <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
