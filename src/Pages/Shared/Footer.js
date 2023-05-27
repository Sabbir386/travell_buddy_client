import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-12 bg-violet-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1440px] mx-auto px-5">
        <div>
          <h3 className="text-white mb-3">Discover</h3>
          <h6 className="text-xs font-bold text-gray-300">
            <Link to={'/'}>Home</Link>
          </h6>
          <h6 className="text-xs font-bold text-gray-300">
            <Link to={'/hotels'}>Hotels</Link>
          </h6>
          <h6 className="text-xs font-bold text-gray-300">
            <Link to={'/contact'}>Contact</Link>
          </h6>
        </div>
        <div>
          <h3 className="text-white mb-3">Payment Methods</h3>
          <div className="grid grid-cols-4 gap-2">
            <img src="/americanex.svg" alt="" />
            <img src="/bkash.svg" alt="" />
            <img src="/dbbl.svg" alt="" />
            <img src="/mastercard.svg" alt="" />
            <img src="/nagad.svg" alt="" />
            <img src="/tap.svg" alt="" />
            <img src="/unitedpay.svg" alt="" />
            <img src="/upay.svg" alt="" />
            <img src="/visa.svg" alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-white mb-3">Need Help ?</h3>
          <p className="text-white text-sm text-">
            We are Always here for you! Knock us on Messenger anytime or Call
            our Hotline (10AM - 10PM).
          </p>
        </div>
        <div>
          <h3 className="text-white mb-3">Contact</h3>
          <p className="text-white text-sm">
          info@travelbuddy.com
          </p>
          <p className="text-white text-sm">
            +880-XXX-XXXXXXXX
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
