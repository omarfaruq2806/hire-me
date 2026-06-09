import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen bg-slate-950">
        <Sidebar></Sidebar>
        <div className="flex-1 p-4">{children}</div>
      </div>
    </>
  );
};

export default layout;
