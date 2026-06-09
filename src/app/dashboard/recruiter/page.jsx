import StatCard from "@/components/dashboard/StateCard";
import React from "react";

const Recruiterdashboard = () => {

  return (

    <div >
      <h1>Hi ......................</h1>
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          title="Total Jobs"
          value="12"
          icon="💼"
          color="text-blue-400"
        />

        <StatCard
          title="Active Jobs"
          value="8"
          icon="🚀"
          color="text-green-400"
        />

        <StatCard
          title="Applications"
          value="34"
          icon="📄"
          color="text-yellow-400"
        />

        <StatCard
          title="Shortlisted"
          value="6"
          icon="⭐"
          color="text-purple-400"
        />
      </div>
    </div>

  );

};

export default Recruiterdashboard;
