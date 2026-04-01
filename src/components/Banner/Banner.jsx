import React from "react";
import bannerImage from "../../assets/banner.png";
import playIcon from "../../assets/Play.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
    <div className="w-[97%] lg:w-full mx-auto mt-10 lg:mt-24 mb-20">
      {/* container */}
      <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left gap-10 lg:gap-15">
        {/* left part */}
        <div>
          {/* new status btn */}
          <div className="flex justify-center lg:justify-start p-4">
            {/* badge container */}
            <div className="inline-flex items-center gap-2 bg-[#EEF2FF] px-4 py-1.5 rounded-full shadow-sm border border-indigo-100">
              {/* animated dot part */}
              <div className="relative flex h-3 w-3">
                {/* animated dot */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9514FA] opacity-75"></span>

                {/* solid dot */}
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9514FA]"></span>
              </div>

              {/* text */}
              <span className="text-[#7C3AED] text-sm md:text-base font-semibold tracking-tight">
                New: AI-Powered Tools Available
              </span>
            </div>
          </div>

          {/* title */}
          <p className="text-[40px] lg:text-[60px] font-extrabold lg:leading-20">
            Supercharge Your <br className="hidden md:block" />{" "}
            <span className="text-[#7C3AED]">Digital Workflow</span>
          </p>

          {/* description */}
          <p className="mx-auto lg:mx-0 text-[#627382] text-[18px] mt-4 mb-7 w-11/12 md:w-7/12">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          {/* two btn */}
          <div className="space-x-2 space-y-2">
            {/* btn 1 */}
            <button className="btn bg-[#7C3AED] text-[16px] hover:bg-[#6D28D9] text-white border-none rounded-full px-6 min-h-0 h-11 capitalize shadow-md">
              Explore Products
            </button>

            {/* btn 2 */}
            <button className="group btn hover:bg-[#7C3AED] border border-solid border-[#7C3AED] rounded-full px-6 min-h-0 h-11 capitalize shadow-md transition-all duration-300">
              <img
                className="group-hover:brightness-0 group-hover:invert"
                src={playIcon}
                alt="Play Icon"
              />
              <span className="text-[#9514FA] text-[16px] group-hover:text-white transition-colors duration-300">
                Watch Demo
              </span>
            </button>
          </div>
        </div>

        {/* right part */}
        <div className="w-[95%] md:w-full flex justify-center">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;