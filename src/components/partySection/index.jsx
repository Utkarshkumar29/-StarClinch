import React, { useState, useEffect } from "react";
import star1 from "../../assets/star1.avif";
import star2 from "../../assets/star2.avif";
import star3 from "../../assets/star3.avif";
import photo1 from "../../assets/photo_1.jpg";
import photo2 from "../../assets/photo_2.jpg";
import photo3 from "../../assets/photo_3.webp";


const parties = [
    {
      text: "Late Night Maggie",
      additionalText: "Party for the boost",
      img: star1,
    },
    {
      text: "Late Night Maggie",
      additionalText: "Party for the boost",
      img: star1,
    },
    {
      text: "Late Night Maggie",
      additionalText: "Party for the boost",
      img: star1,
    },
    {
      text: "Late Night Maggie",
      additionalText: "Party for the boost",
      img: star1,
    },
  ];

const PartySection=()=>{
    return(
        <div className="bg-[#080810] w-full px-[260px] flex flex-col gap-[120px] ">
        {parties.map((party, index) => {
          return (
            <div
              className={` ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } flex items-end gap-[32px] bg-[#080810]`}
            >
              <p className=" text-[48px] text-[#FFFFF] ">
                {party.text}
                <br />
                {party.additionalText}
              </p>
              <img
                src={party.img}
                width={400}
                height={300}
                className="rounded-2xl max-h-[350px] opacity-50 hover:opacity-100 transform transition-all duration-300 rotate-6 hover:rotate-0 "
                alt="Party Error"
              />
            </div>
          );
        })}
      </div>
    )
}

export default PartySection