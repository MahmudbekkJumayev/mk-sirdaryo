import React from "react";
import Form from "./Form";

const Home = () => {
  return (
    <div className="container py-5">
      <div>
        <h2 className="text-[20px] md:text-[30px] font-medium text-gray-900 text-center">2025-YIL UCHUN DAVRIY NASHRLARGA OBUNA BO'LISH</h2>
        <div className="flex gap-5 py-5">
            <div>
                <Form/>
            </div>
            <div>
                <h3 className="text-[22px] text-gray-900 font-normal">Dastur xaqida</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
