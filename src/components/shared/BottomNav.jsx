// import React from 'react';
// import { FaHome } from 'react-icons/fa';
// import { MdOutlineReorder } from 'react-icons/md';
// import { MdTableBar } from 'react-icons/md';
// import { CiCircleMore } from 'react-icons/ci';
// import { BiSolidDish } from 'react-icons/bi';

// const BottomNav = () => {
//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
//       <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]">
//         <FaHome className="inline mr-2" size={20} /> <p>Home</p>
//       </button>
//       <button className="flex items-center justify-center text-[#ababab] w-[200px]">
//         <MdOutlineReorder className="inline mr-2" size={20} /> <p>Orders</p>
//       </button>
//       <button className="flex items-center justify-center text-[#ababab] w-[200px]">
//         <MdTableBar className="inline mr-2" size={20} /> <p>Tables</p>
//       </button>
//       <button className="flex items-center justify-center text-[#ababab] w-[200px]">
//         <CiCircleMore className="inline mr-2" size={20} /> <p>More</p>
//       </button>
//       {/* <button className="absolute bottom-5 right-5 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center">
//         <BiSolidDish size={30} />
//       </button> */}
//       <button className="absolute bottom-5 right-5 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center">
//         <BiSolidDish size={30} />
//       </button>
//     </div>
//   );
// };

// export default BottomNav;






import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';
import { CiCircleMore } from 'react-icons/ci';
import { BiSolidDish } from 'react-icons/bi';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around items-center">
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]">
        <FaHome className="inline mr-2" size={20} /> <p>Home</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <MdOutlineReorder className="inline mr-2" size={20} /> <p>Orders</p>
      </button>

      {/* Floating Center Dish Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
        <button className="bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 shadow-lg">
          <BiSolidDish size={30} />
        </button>
      </div>

      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <MdTableBar className="inline mr-2" size={20} /> <p>Tables</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <CiCircleMore className="inline mr-2" size={20} /> <p>More</p>
      </button>
    </div>
  );
};

export default BottomNav;
