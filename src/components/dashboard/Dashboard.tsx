import React from "react";
import GoatTestImage from "../../assets/goat-test-img.jpg";
import GoatMonitor from "./GoatMonitor";

function Dashboard() {
  return (
    <section className="flex-1 flex">
      <div className="w-[65%] flex-row mx-auto">
        <GoatMonitor />
      </div>
    </section>
  );
}

export default Dashboard;
