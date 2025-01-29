import React, { useState, useEffect } from "react";
import star1 from "../../assets/star1.avif";
import star2 from "../../assets/star2.avif";
import star3 from "../../assets/star3.avif";
import photo1 from "../../assets/photo_1.jpg";
import photo2 from "../../assets/photo_2.jpg";
import photo3 from "../../assets/photo_3.webp";

const photos = [photo1, photo2, photo3, star1, star2, star3, photo1, photo3];
const videos = [photo1, photo2, photo3];

const GallerySection=()=>{
    const [section, setSection] = useState("photos");

    return(
        <div className="bg-[#080810] flex flex-col gap-[64px] h-full ">
        <div className="w-full min-h-[1200px] h-full bg-[#0b0b16] clip-path-dome relative flex items-center justify-center">
          <div className=" p-[16px] bg-[#0e0e18] flex gap-[32px] absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-[300px] ">
            <p
              onClick={() => setSection("photos")}
              className={` cursor-pointer px-[64px] py-[32px] rounded-[300px] text-[32px] max-h-[70px] flex justify-center items-center ${
                section === "photos"
                  ? "bg-[#e3e6fe] text-[#000000]"
                  : "  bg-[#1b1b26] text-[#FFFFFF]  "
              }`}
            >
              Photos
            </p>
            <p
              onClick={() => setSection("videos")}
              className={` cursor-pointer px-[64px] py-[32px] rounded-[300px] text-[32px] max-h-[70px] flex justify-center items-center ${
                section === "videos"
                  ? "bg-[#e3e6fe] text-[#000000]"
                  : " bg-[#1b1b26] text-[#FFFFFF] "
              }`}
            >
              Videos
            </p>
          </div>

          {section == "photos" && (
            <div className="   grid grid-cols-4 gap-[24px] mt-4 ">
              {photos.map((photo, index) => {
                return (
                  <img
                    src={photo}
                    alt="Person"
                    width={250}
                    height={250}
                    className={` ${
                      index == 0 || index == 2
                        ? " rounded-br-[4px] rounded-full "
                        : "rounded-[12px] "
                    } aspect-square object-cover object-center`}
                  />
                );
              })}
            </div>
          )}

          {section == "videos" && (
            <div className="   grid grid-cols-3 gap-[48px] mt-4 ">
              {videos.map((photo, index) => {
                return (
                  <img
                    src={photo}
                    alt="Person"
                    width={500}
                    height={800}
                    className={`  aspect-square object-cover object-center`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    )
}

export default GallerySection