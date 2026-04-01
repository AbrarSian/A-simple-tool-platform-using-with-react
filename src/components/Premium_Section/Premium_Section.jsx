import React, { use } from "react";
import Single_Card from "./Single_Card";
import Cart from "./Cart";

const Premium_Section = ({ dataPromise, carts, setCarts }) => {
    const data = use(dataPromise);
    
  return (
    <div>
      {/* loop all cards */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15">
          {data?.map((d) => (
            <Single_Card d={d} key={d.id} carts={carts} setCarts={setCarts}></Single_Card>
          ))}
        </div>
    </div>
  );
};

export default Premium_Section;