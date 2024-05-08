'use client'
import React, { useState } from 'react';
import Header from '@/componets/navbar';
import Footer from '@/componets/footer';

import ScrollToTopButton from "../Scroll/scroll";
import { createContext, useContext } from 'react';


const PharmacyContext = createContext(null);
const availablePaymentMethods = ["Cash", "Airtel Money", "Mpamba", "Medical Scheme"];
export default function Buy() {
  // Use context
  const pharmacyContextValue = useContext(PharmacyContext);
  const [showMessage, setShowMessage] = useState(false);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search
  const handleSearch = () => {
    // Do something with the search query
    setShowMessage(true); // Show the message
  };

  return (
    <>
      <Header />
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
        <div className="mx-auto max-w-10xl px-6 lg:px-8">
          <div
            className="bg-green-400 w-full h-400 justify-center py-24 sm:py-32"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/564x/bd/bc/0b/bdbc0bda70405b998e163ad879a429f1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h1 className="mt-60 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  Liwonde Private Hospital Pharmacy Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              Liwonde Private Hospital History
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Liwonde Private Hospital (LPH) has a rich history of providing Scarcity drugs to its community. 
              Founded in 1999, LPH has been a cornerstone in the medical field, striving for excellence and compassion in patient care.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-green-900 ">
                Buy Medicines
              </h3>
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Search for available drugs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 px-4 py-2 text-lg border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                />
              </div>
              <div className="mt-4 md:mt-6">
                <button
                  onClick={handleSearch}
                  className="w-full md:w-auto px-4 py-2 bg-green-600 text-white rounded-md shadow-sm text-sm font-semibold focus:outline-none hover:bg-orange-500"
                >
                  Search
                </button>
              </div>
              {showMessage && (
                <p className="mt-4 text-sm text-gray-700">Showing results for: {searchQuery}</p>
              )}
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Payment Methods
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {availablePaymentMethods.map((method) => (
                  <li key={method} className="flex gap-x-3 items-center">

                    {method}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    We Treat,  God Heals
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      MWK00
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      kwacha
                    </span>
                  </p>
                  <a
                    href="/BuyNow"
                    className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buy Now
                  </a>
                  <p className="mt-6 text-xs leading-5 border-gray-300 text-gray-600">
                    Note: Collection is at the LPH Pharmacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
