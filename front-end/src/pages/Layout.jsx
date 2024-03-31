import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;