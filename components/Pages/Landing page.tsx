"use client";
import { ConnectKitButton } from "connectkit";

import React, { useState } from "react";
import Converter from "../Web3/Converter";
import CryptoComponent from "../Web3/CryptoChart";

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="font-bold">Swap</span>
                </a>
              </div>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Home
              </a>
              <ConnectKitButton />
            </div>
            {/* Mobile Nav */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="mobile-menu-button">
                <svg
                  className="h-6 w-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Home
            </a>
            <ConnectKitButton />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Welcome to Our Site
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to swap crypto
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our tool helps you convert and see crypto prices live{" "}
            </p>
          </div>
          <div className="mt-10 lg:flex lg:justify-center">
            <Converter />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything crypto you need to see
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              only showing a limited no of crypto becouse of performanc issue.
              is feched by an API
            </p>
          </div>
          <div className="w-full flex justify-center"></div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2m-4-5l-4-4m0 0l4-4m-4 4h12.76a2 2 0 011.79 2.11l-.3 3A2 2 0 0117.42 14H15v4m-4-5v6"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                      Crypto convertion
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      a easy way to convert crypto
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 8h10M7 12h10m-7 4h7"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                      crypto currency
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      a neat graph to show crypto currencys and its prices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8h18M3 12h18m-9 8h6"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                      Not all expections meet.
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      I am very soory for not meeting all requirements and
                      expections but i have given my all to this project . I
                      have only worked with making ui by design from figma and
                      never worked in details with too much api fetching. I
                      would love to learn more about it and if given a chance
                      would learn fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <CryptoComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
