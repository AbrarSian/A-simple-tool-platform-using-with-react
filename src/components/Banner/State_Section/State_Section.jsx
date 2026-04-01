import React from "react";

const State_Section = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-6 md:p-12">

        {/* container */}
        <div className="w-full max-w-6xl py-12 px-6 rounded-3xl flex flex-col md:flex-row items-center justify-around text-white">

          {/* active users */}
          <div className="flex flex-col items-center text-center px-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              50K+
            </h2>
            <p className="text-white/80 mt-2 font-medium">Active Users</p>
          </div>

          {/* vertical divider */}

          <div className="hidden md:block w-[1.5px] h-20 bg-white/30"></div>

          {/* gap for mobile devices */}
          <div className="md:hidden my-8 w-20 h-px bg-white/20"></div>

          {/* premium tools */}
          <div className="flex flex-col items-center text-center px-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              200+
            </h2>
            <p className="text-white/80 mt-2 font-medium">Premium Tools</p>
          </div>

          {/* vertical divider */}
          <div className="hidden md:block w-[1.5px] h-20 bg-white/30"></div>

          {/* gap for mobile devices */}
          <div className="md:hidden my-8 w-20 h-px bg-white/20"></div>

          {/* rating */}
          <div className="flex flex-col items-center text-center px-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              4.9
            </h2>
            <p className="text-white/80 mt-2 font-medium">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State_Section;