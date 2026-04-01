import React, { use } from "react";
import Single_Card from "./Single_Card";

const Premium_Section = ({dataPromise}) => {
    const data = use(dataPromise);
    
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
      <div className="flex justify-center items-center mt-3 lg:mt-5">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box rounded-3xl px-1">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-3xl px-5"
            aria-label="Products"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-3xl px-5"
            aria-label="Cart"
          />
        </div>
      </div>

      {/* loop all cards */}
        {
            data?.map(d => <Single_Card d={d} key={d.id}></Single_Card>
            )
        }

        
    </div>
  );
};

export default Premium_Section;