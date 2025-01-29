import star1 from "./assets/star1.avif";
import star2 from "./assets/star2.avif";
import star3 from "./assets/star3.avif";
import photo1 from "./assets/photo_1.jpg";
import photo2 from "./assets/photo_2.jpg";
import photo3 from "./assets/photo_3.webp";
import group from "./assets/group.jpg";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HeroSection from "./components/heroSection";
import GallerySection from "./components/gallerySection";
import PartySection from "./components/partySection";
import MeetSection from "./components/meetSection";
import RecentSection from "./components/recentSection";
import TalentSection from "./components/talentSection";

function App() {

  return (
    <div className=" bg-[#080810] max-h-full w-full text-white  ">

      <HeroSection/>

      <GallerySection/>

      <PartySection/>

      <MeetSection/>

      <RecentSection/>

      <TalentSection/>
      
    </div>
  );
}

export default App;
