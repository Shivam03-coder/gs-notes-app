import MainLayout from "@/components/(home)/main";
import Appfooter from "@/components/shared/footer";
import AppNavBar from "@/components/shared/header";
import React from "react";

const HomePage = () => {
  return (
    <div className="page relative mx-auto min-h-screen">
      <div className="w-[90%] mx-auto">
        <nav className="sticky top-0 z-50">
          <AppNavBar />
        </nav>
        <MainLayout />
      </div>
      <Appfooter />
    </div>
  );
};

export default HomePage;
