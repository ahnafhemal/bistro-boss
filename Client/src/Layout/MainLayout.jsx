import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
