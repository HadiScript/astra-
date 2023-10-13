import logo_light from "../../assets/images/logo-light.png";
import React from "react";
import { Link } from "react-router-dom";
import logo_web_dark from "../../assets/images/logo_web_dark.png";
import logo_web_white from "../../assets/images/white_logo.png";

export default function Footer() {
  return (
    <footer className="relative my-footer mt-20">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="relative py-12">
            <div className="relative w-full">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="md:col-span-3">
                  <Link
                    to="#"
                    className="flex justify-center md:justify-start focus:outline-none"
                  >
                    <img src={logo_web_white} className="h-10" alt="" />
                  </Link>
                </div>

                <div className="md:col-span-9">
                  <ul className="list-disc footer-list ltr:md:text-right rtl:md:text-left text-center">
                    <li className="inline-block">
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="inline-block mt-[10px] md:mt-0">
                      <Link
                        to="/services"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="inline-block mt-[10px] md:mt-0">
                      <Link
                        to="/career"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4"
                      >
                        Career
                      </Link>
                    </li>
                    <li className="inline-block mt-[10px] md:mt-0">
                      <Link
                        to="/about"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4"
                      >
                        About us
                      </Link>
                    </li>
                    <li className="inline-block mt-[10px] md:mt-0">
                      <Link
                        to="/contact"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
        <div className="container text-center">
          <div className="grid  items-center gap-6">
            <div className="text-center">
              <p className="mb-0 text-gray-300 font-medium">
                ©{new Date().getFullYear()}
                <span className="mx-3">www.astraanalytica.co</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
