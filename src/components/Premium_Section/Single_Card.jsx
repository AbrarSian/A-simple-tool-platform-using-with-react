import React, { useState } from "react";
import Cart from "./Cart";
import { toast } from "react-toastify";

const Single_Card = ({ d, carts, setCarts }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);

  const handleBuyBtn = () =>{
    setIsBuyNow(true);
    setCarts([...carts, d]);
    toast.success("Item Added To Cart")
  }

  return (
    <div>
      {/* dynamic card */}
      <div className="mx-auto rounded-3xl card w-96 bg-base-100 border border-[#d5d2d2] shadow-sm hover:lg:scale-105 transition-all hover:shadow-md">
        <div className="card-body">
          {/* badge */}
          <div className={`ml-auto badge badge-lg ${d.tagType === "best seller"? "rounded-2xl badge-warning font-bold text-[#BB4D00] bg-[#FEF3C6]" : d.tagType === "popular"? "badge-info text-[#4F39F6] font-bold bg-[#E1E7FF] rounded-2xl" : "rounded-2xl font-bold badge-success text-[#0A883E] bg-[#DBFCE7]"}`}>
            {d.tag}
          </div>
          <div className="space-y-4">
            {/* icon */}
            <div className="border border-[#F2F2F2] rounded-full p-3 w-16 flex justify-center items-center">
              <img className="w-10" src={d.icon} alt="" />
            </div>
            <h2 className="text-3xl font-bold">{d.name}</h2>
            <p className="text-[#627382]">
              Generate high-quality content, blogs, and marketing copy in
              seconds with advanced AI.
            </p>
            <span className="text-xl"><span className="font-bold text-2xl">${d.price}</span>/{d.period}</span>
          </div>
           <ul className="mt-4 flex flex-col gap-2 text-xs">
            {
              d.features.map((el, i) => <li key={i}>
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
              <span>{el}</span>
            </li>
            )
            }
          </ul>
          <div className="mt-6">
            <button onClick={handleBuyBtn} className="rounded-full btn btn-primary btn-block">
              {isBuyNow ? "Added to cart" : "Buy Now"}
            </button>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Single_Card;