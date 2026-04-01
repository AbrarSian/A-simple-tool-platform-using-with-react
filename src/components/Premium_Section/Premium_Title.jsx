import React from "react";

const Premium_Title = ({activeTab , setActiveTab, carts}) => {
  return (
    <div>
      {/* title part */}
      <div className="space-y-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] mb-6 lg:w-6/12">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      {/* tab */}
      <div className="flex justify-center items-center mt-5">

        <div className="tabs tabs-box rounded-3xl px-1">
          <input
            onClick={() => setActiveTab("products")}
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-3xl px-5 font-bold ${activeTab === "products"? "bg-[#4F39F6] text-white" : null}`}
            aria-label="Products"
            checked={activeTab === "products"}
          />
          <input
            onClick={() => setActiveTab("cart")}
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-3xl px-5 font-bold ${activeTab === "cart"? "bg-[#4F39F6] text-white" : null}`}
            aria-label={`Cart ${carts.length < 1 ? "" : `(${carts.length})`}`}
            checked={activeTab === "cart"}
          />
        </div>
      </div>
    </div>
  );
};

export default Premium_Title;