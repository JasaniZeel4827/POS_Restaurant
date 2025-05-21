import React from 'react';

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-[#1a1a1a] py-5 px-5 rounded-lg w-[50%]">
      <div className="flex items-start justify-between">
        <div className="">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            {title}
          </h1>
        </div>
        <button className={`${title === "Total Earnings" ? "bg-[#f6b100]" : "bg-[#02ca3a]"} p-3 rounded-lg text-[#f5f5f5] text-2xl`}>
          {icon}
        </button>
      </div>
      <div>
        <h1 className="text-[#f5f5f5] text-4xl font-bold mt-5">{number}</h1>
        <h1 className="text-[#f5f5f5] text-lg mt-2`">
          <span>{footerNum}</span>% <span className="text-[#02ca3a]">than yesterday</span>
        </h1>
      </div>
    </div>
  );
};

export default MiniCard;