import React from "react";

const Single_Card = ({ d }) => {
  console.log(d);

  return (
    <div>
      {/* dynamic card */}
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          {/* badge */}
          <div className="ml-auto badge badge-md badge-warning">
            Most Popular
          </div>
          <div className="space-y-4">
            {/* icon */}
            <div className="border border-[#F2F2F2] rounded-full p-3 w-16 flex justify-center items-center">
              <img className="w-10" src={d.icon} alt="" />
            </div>
            <h2 className="text-3xl font-bold">Premium</h2>
            <p className="text-[#627382]">
              Generate high-quality content, blogs, and marketing copy in
              seconds with advanced AI.
            </p>
            <span className="text-xl">$29/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
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
              <span>High-resolution image generation</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Single_Card;