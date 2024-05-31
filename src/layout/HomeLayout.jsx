import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar/>
        <div className="w-full min-h-screen my-10">{children}</div>
      <Footer/>
    </div>
  );
};

export default HomeLayout;
