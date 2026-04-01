import React from "react";

const Pricing_Section = () => {
  return (
    <div>
      {/* title part */}
      <div className="space-y-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382] mb-6">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* pricing card */}
      <div>
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* container of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* card 1 */}
              <div className="flex flex-col bg-white border hover:lg:scale-105 border-gray-100 shadow-sm p-8 rounded-[20px] transition-all hover:shadow-md">
                <div className="grow">
                  <h3 className="text-xl font-bold text-gray-800">Starter</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Perfect for getting started
                  </p>

                  <div className="my-8">
                    <span className="text-4xl font-black text-gray-900">
                      $0
                    </span>
                    <span className="text-gray-400 font-medium ml-1">
                      /Month
                    </span>
                  </div>

                  {/* card features */}
                  <ul className="space-y-4 mb-8">
                    {[
                      "Access to 10 free tools",
                      "Basic templates",
                      "Community support",
                      "1 project per month",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-600 font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* btn */}
                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-2xl w-full h-14 capitalize text-lg shadow-lg mt-auto">
                  Get Started Free
                </button>
              </div>

              {/* card 2 */}
              <div className="relative flex flex-col bg-[#7C3AED] shadow-2xl p-8 rounded-[20px] text-white border-none hover:lg:scale-105 transition-all z-10">

                {/* Most Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF9C3] text-[#854D0E] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-yellow-200">
                  Most Popular
                </div>

                <div className="grow">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-indigo-100 text-sm mt-1">
                    Best for professionals
                  </p>

                  <div className="my-8">
                    <span className="text-4xl font-black">$29</span>
                    <span className="text-indigo-200 font-medium ml-1">
                      /Month
                    </span>
                  </div>

                  {/* card features */}
                  <ul className="space-y-4 mb-8">
                    {[
                      "Access to all premium tools",
                      "Unlimited templates",
                      "Priority support",
                      "Unlimited projects",
                      "Cloud sync",
                      "Advanced analytics",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-white/90 font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* btn */}
                <button className="btn bg-white hover:bg-gray-100 text-[#7C3AED] border-none rounded-2xl w-full h-14 capitalize text-lg shadow-md mt-auto">
                  Start Pro Trial
                </button>
              </div>

              {/* card 3 */}
              <div className="flex flex-col bg-white border border-gray-100 shadow-sm p-8 rounded-[20px] hover:lg:scale-105 transition-all hover:shadow-md">
                <div className="grow">
                  <h3 className="text-xl font-bold text-gray-800">
                    Enterprise
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    For teams and businesses
                  </p>

                  <div className="my-8">
                    <span className="text-4xl font-black text-gray-900">
                      $99
                    </span>
                    <span className="text-gray-400 font-medium ml-1">
                      /Month
                    </span>
                  </div>

                  {/* card features */}
                  <ul className="space-y-4 mb-8">
                    {[
                      "Everything in Pro",
                      "Team collaboration",
                      "Custom integrations",
                      "Dedicated support",
                      "SLA guarantee",
                      "Custom branding",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-600 font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* btn */}
                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-2xl w-full h-14 capitalize text-lg shadow-lg mt-auto">
                  Contact Sales
                </button>
              </div>

            </div>
          </div>
        </div>
      </div> {/* <-- FIXED: missing closing div */}
    </div>
  );
};

export default Pricing_Section;