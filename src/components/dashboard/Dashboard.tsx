import React from "react";
import GoatTestImage from "../../assets/goat-test-img.jpg";

function Dashboard() {
  return (
    <section className="bg-transparent flex-1 flex gap-[1rem]">
      <div className="flex-1 bg-[#ECECEC] rounded-lg">
        <section className="flex text-center justify-between border-b-2 border-[#E5E5E5] mx-[1rem] h-[5%]">
          <div className="ml-[1rem] h-full">Tab 1</div>
          <div className="border-b-2 h-full">Tab 2</div>
          <div className="h-full">Tab 3</div>
          <div className="h-full">Tab 4</div>
          <div className="mr-[1rem] h-full">Tab 5</div>
        </section>
      </div>
      <div className="flex-1/3 bg-[#ECECEC] rounded-lg overflow-hidden p-[0.5rem]">
        <img className="h-full w-full rounded-md" src={GoatTestImage} alt="" />
      </div>
    </section>
  );
}

export default Dashboard;
