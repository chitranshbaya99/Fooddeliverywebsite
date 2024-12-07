import React from "react";
import {
  InstagramFilled,
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
} from "@ant-design/icons";

import { LOGO_URL } from "./utils/constants";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 flex">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
         
          <img src={LOGO_URL} alt="app-logo" className="h-12" />

          
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} foodie
          </p>

         
          <ul className="flex space-x-6">
            <li>
              <InstagramFilled className="text-2xl hover:text-pink-500 transition-colors" />
            </li>
            <li>
              <FacebookFilled className="text-2xl hover:text-blue-600 transition-colors" />
            </li>
            <li>
              <TwitterCircleFilled className="text-2xl hover:text-blue-400 transition-colors" />
            </li>
            <li>
              <LinkedinFilled className="text-2xl hover:text-blue-700 transition-colors" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
