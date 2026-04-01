import React from "react";

const Ready_Section = () => {
  return (
    <div>
      <section className="py-20 px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready To Transform Your Workflow?
            </h2>
            <p className="text-white/90 mb-10 max-w-xl mx-auto text-sm md:text-base">
              Join thousands of professionals who are already using Digitools to
              work smarter. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                {/* btn 1 */}
              <button className="btn bg-white hover:bg-gray-300 text-[#7C3AED] border-none rounded-full px-10 h-14 text-lg font-bold">
                Explore Products
              </button>
                {/* btn2 */}
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#7C3AED] rounded-full px-10 h-14 text-lg font-bold transition-all">
                View Pricing
              </button>
            </div>
            <p className="text-white/70 text-sm font-medium">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </section>
    </div>
  );
};

export default Ready_Section;