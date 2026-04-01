import React from "react";
import userPng from "../../../../assets/user.png";
import productPng from "../../../../assets/package.png";
import rocketPng from "../../../../assets/rocket.png";

const Started_Section = () => {
  return (
    <div className="mt-10 mb-10 lg:mb-20 lg:mt-20">
      {/* title part */}
      <div className="space-y-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
          Get Started In 3 Steps
        </h1>
        <p className="text-[#627382] mb-6">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* cards part */}
      <div>
        {/* container */}
        <div className="flex items-center justify-center bg-base-100 px-4 py-7 md:py-12">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {/* card 1 */}
              <div className="relative flex flex-col items-center justify-center text-center p-8 md:p-10 lg:p-12 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                {/* number badge */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 flex h-7 w-7 items-center justify-center rounded-full bg-[#9514FA]">
                  <span className="text-xs font-bold text-white">01</span>
                </div>
                {/* icon wrapper */}
                <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <img width="42" src={userPng} alt="" />
                </div>
                <h3 className="mt-6 md:mt-8 text-xl md:text-2xl font-bold text-gray-800">
                  Create Account
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed font-medium px-2">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>

              {/* card 2 */}
              <div className="relative flex flex-col items-center justify-center text-center p-8 md:p-10 lg:p-12 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                {/* number badge */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 flex h-7 w-7 items-center justify-center rounded-full bg-[#9514FA]">
                  <span className="text-xs font-bold text-white">02</span>
                </div>
                {/* icon wrapper */}
                <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <img width="42" src={productPng} alt="" />
                </div>
                <h3 className="mt-6 md:mt-8 text-xl md:text-2xl font-bold text-gray-800">
                  Choose Products
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed font-medium px-2">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>

              {/* card 3 */}
              <div className="relative flex flex-col items-center justify-center text-center p-8 md:p-10 lg:p-12 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
                {/* number badge */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 flex h-7 w-7 items-center justify-center rounded-full bg-[#9514FA]">
                  <span className="text-xs font-bold text-white">03</span>
                </div>
                {/* icon wrapper */}
                <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <img width="42" src={rocketPng} alt="" />
                </div>
                <h3 className="mt-6 md:mt-8 text-xl md:text-2xl font-bold text-gray-800">
                  Start Creating
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed font-medium px-2">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started_Section;