"use client";
import React, { useState } from "react";

// import { Container } from './styles';

function Header({ getDataOfInput, fetchProfileData }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    getDataOfInput(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    getDataOfInput(inputValue);
    fetchProfileData();
  };

  return (
    <nav className="border-b px-4 py-2 bg-white">
      <div className="flex flex-wrap items-center justify-between md:justify-around">
        {/* logo */}
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
          alt="instagram"
        />
        {/* search*/}
        <div className=" relative hidden sm:block text-gray-500">
          <div className="flex">
            <input
              className="search-bar max-w-xs border rounded bg-gray-200 px-4
  text-left outline-none focus:border-gray-400"
              type="search"
              placeholder="Search"
              value={inputValue}
              onChange={handleChange}
            />
            <i className="fa fa-search absolute top-0 left-0 ml-12 mt-1" />

            <button
              onClick={handleButtonClick}
              className="ml-10 p-2 rounded-lg text-white bg-blue-500 w-fit"
            >
              Search
            </button>
          </div>
        </div>
        <div className="space-x-4">
          <a
            className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold 
                 text-sm rounded"
            href="#"
          >
            Log In
          </a>
          <a
            className="inline-block text-blue-500 font-semibold text-sm"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
