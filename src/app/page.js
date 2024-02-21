"use client";
import Image from "next/image";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import CountSection from "./components/CountSection/CountSection";
import PostGrid from "./components/PostGrid/PostGrid";
import { useState } from "react";

export default function Home() {
  const [profileData, setProfileData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchProfileData = async () => {
    const response = await fetch(
      `http://localhost:8000/api/search/${inputValue}`
    );
    const data = await response.json();
    setProfileData(data);
  };

  const getDataOfInput = (data) => {
    setInputValue(data);
  };

  return (
    <>
      <Header
        getDataOfInput={getDataOfInput}
        fetchProfileData={fetchProfileData}
      />
      <div className="lg:w-8/12 lg:mx-auto mb-8">
        <Profile
          profileData={profileData[0]?.json_data?.node?.owner}
          postCount={profileData.length}
        />
        <div className="px-px md:px-3">
          <CountSection />
          {profileData.length !== 0 && <PostGrid data={profileData} />}
        </div>
      </div>
    </>
  );
}
