import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useLocation, useNavigation } from "react-router";
import Spinner from "../Components/Spinner";

const Layout = () => {
  const navigation = useNavigation();
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-433px)]">
        {navigation.state == "loading" ? <Spinner></Spinner> : <Outlet />}
      </div>

      {pathname === "/contact" || <Footer></Footer>}
    </div>
  );
};

export default Layout;
