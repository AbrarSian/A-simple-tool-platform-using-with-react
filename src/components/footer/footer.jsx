import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";

const Footer = () => {
    return (
    <div>
      <footer className="mx-auto footer bg-neutral text-neutral-content md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-6 p-10 ">
        <nav className="lg:col-span-2 w-9/12">
          <div>
            <h1 className="mb-4 text-2xl md:text-3xl font-extrabold cursor-pointer">
              DigiTools
            </h1>
          </div>
          <p className="text-white/90">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          {["Features", "Pricing", "Templates", "Integrations"].map(
            (item, i) => (
              <a key={i} className="link link-hover">
                {item}
              </a>
            )
          )}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          {["About", "Blog", "Careers", "Press"].map((item, i) => (
            <a key={i} className="link link-hover">
              {item}
            </a>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          {["Documentation", "Help Center", "Community", "Contact"].map(
            (item, i) => (
              <a key={i} className="link link-hover">
                {item}
              </a>
            )
          )}
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          {/* icons container */}
          <div className="flex gap-2">
            {/* instagram icon */}
            <div className="cursor-pointer p-1 text-black bg-white rounded-full">
              <FaInstagram></FaInstagram>
            </div>
            {/* facebook icon */}
            <div className="cursor-pointer p-1 text-black bg-white rounded-full">
              <RiFacebookBoxFill></RiFacebookBoxFill>
            </div>
            {/* twitter icon */}
            <div className="cursor-pointer p-1 text-black bg-white rounded-full">
              <BsTwitterX className="text-[13px]"></BsTwitterX>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;