import React, { useState } from "react";
import Sidebar from "./Component/Sidebar";
import ReviewForm from "./Component/ReviewForm";
import ReviewList from "./Component/ReviewList";

function App() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar active={activeTab} onNavigate={setActiveTab} />

      <div className="flex-grow p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Web Reviews Details</h1>
        <div className="bg-white shadow rounded p-4 mb-6">
          <div className="flex space-x-4 border-b pb-2 mb-4">
            <span
              className={`cursor-pointer font-semibold ${
                activeTab === "add"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("add")}
            >
              Add Review
            </span>
            <span
              className={`cursor-pointer font-semibold ${
                activeTab === "all"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Reviews
            </span>
          </div>

          {activeTab === "add" && <ReviewForm />}
          {activeTab === "all" && <ReviewList />}
        </div>
      </div>

    </div>
  );
}

export default App;
