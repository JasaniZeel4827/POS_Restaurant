import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greeting from "../components/home/Greeting";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Div */}
      <div className="flex-[3]">
         <Greeting />
      </div>
     
      {/* Right Div */}
      <div className="flex-[2] bg-blue-500"></div>
      <BottomNav />
    </section>
  );
};

export default Home;