// const Sidebar = () => (
//     <div className="w-64 bg-gray-100 h-screen p-4">
//         <h2 className="text-xl font-bold mb-6">Reviews</h2>
//         <ul className="space-y-3">
//             {["Admin", "Localization", "Home", "All Reviews", "Widgets", "Badges", "Requests", "Ads", "Reports", "Sources"].map((item) => (
//                 <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
//             ))}
//         </ul>
//     </div>
// );
// export default Sidebar;

// Sidebar.js
import React from "react";
import { FaHome, FaPlusCircle, FaListUl } from "react-icons/fa";

const Sidebar = ({ onNavigate, active }) => {
  const navItems = [
    { label: "Home", icon: <FaHome />, key: "home" },
    { label: "Add Review", icon: <FaPlusCircle />, key: "add" },
    { label: "All Reviews", icon: <FaListUl />, key: "all" },
  ];

  return (
    <div className="h-screen w-60 bg-gray-800 text-white flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">
        Feedback App
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`flex items-center space-x-3 px-4 py-2 rounded-md transition ${
              active === item.key ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
