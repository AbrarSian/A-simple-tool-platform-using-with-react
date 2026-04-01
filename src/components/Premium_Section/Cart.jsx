import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const handleDeleteCart = (id) => {
    const currentData = carts.filter((cart) => cart.id !== id);
    setCarts(currentData);
    toast.info("Item Removed from Cart")
  };
  const handleRemoveItem = () => {
    setCarts([])
    toast.success("Proceeding to checkout...")
  }

  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);

  return (
    <div className="bg-[#F2F2F2] p-6 rounded-2xl my-10 w-[95%] mx-auto">
      <h1 className="my-4 text-3xl font-bold text-center md:text-left">
        Your Cart
      </h1>
      {carts.length === 0 ? (
        <div className="flex justify-center h-30 my-6 md:my-10">
          <p className="text-3xl font-bold">Cart is Empty</p>
        </div>
      ) : (
        <div>
            {carts.map((cart) => (
            <div key={cart.id}>
              <div className="flex flex-col md:flex-row py-6 justify-between items-center px-6 my-6 rounded-2xl bg-[#F9FAFC]">
                <div className="flex flex-col md:flex-row gap-4 items-center my-4">
                  {/* icon */}
                  <div className="border bg-white/80 border-[#F2F2F2] rounded-full p-3 w-16 flex justify-center items-center">
                    <img className="w-10" src={cart.icon} alt="" />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold">{cart.name}</h3>
                    <p className="text-[22px] font-semibold">${cart.price}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <button onClick={() => handleDeleteCart(cart.id)} className="btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold my-5">Total:</p>
            <p className="text-2xl font-bold my-5">
              $<span>{totalPrice}</span>
            </p>
          </div>
          <div>
            <button
              onClick={handleRemoveItem}
              className="btn btn-primary w-full rounded-3xl md:py-5 text-[20px]"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
    )}
    </div>
  );
};

export default Cart;