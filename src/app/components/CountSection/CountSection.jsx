import React from "react";

// import { Container } from './styles';

function CountSection() {
  return (
    <ul
      className="flex md:hidden justify-around space-x-8 border-t 
text-center p-2 text-gray-600 leading-snug text-sm"
    >
      <li>
        <span className="font-semibold text-gray-800 block">136</span>
        posts
      </li>
      <li>
        <span className="font-semibold text-gray-800 block">40.5k</span>
        followers
      </li>
      <li>
        <span className="font-semibold text-gray-800 block">302</span>
        following
      </li>
    </ul>
  );
}

export default CountSection;
