import React, { useState, useEffect } from "react";
import star1 from "../../assets/star1.avif";
import star2 from "../../assets/star2.avif";
import star3 from "../../assets/star3.avif";
import photo1 from "../../assets/photo_1.jpg";
import photo2 from "../../assets/photo_2.jpg";
import photo3 from "../../assets/photo_3.webp";
import group from "../../assets/group.jpg";


const imageData = [
    {
      src: star1,
      alt: "Star 1",

      title: "Zahir Khan",
      subtitle: "for an\n event hosted at\n Pune for\n Meesho",
      date: "14 March 2023",
    },
    {
      src: star2,
      alt: "Star 2",

      title: "John Doe",
      subtitle: "for an\n  event held\n at Delhi for\n XYZ",
      date: "21 March 2023",
    },
  ];

const RecentSection=()=>{
    const [currentIndex, setCurrentIndex] = useState(0)
    
      const nextImageShow = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length)
      };
    
      const prevImageShow = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length)
      }
    
      const currentImage = imageData[currentIndex]
    
      const subtitleLines = currentImage.subtitle.split("\n")
    return(
        <div
        className=" relative
         bg-[#080810] text-center overflow-hidden flex gap-[32px] flex-col pt-[100px] "
      >
        <div class=" absolute left-[-200px]  loop-text whitespace-nowrap">
          ★ HIGHLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
          HIGHLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
          HIGHLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
          HIGHLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
        </div>
        <div class=" absolute right-[-200px] bottom-24 loop-text-reverse whitespace-nowrap">
          ★ HIGHLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
          HIGHLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
          HIGHLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
          HIGHLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
        </div>
        <p className=" text-[58px] leading-[60px] ">
          Recent shows made star-
          <br />
          studded over Starclinch
        </p>

        <div className=" flex gap-[50px] px-[120px] items-center justify-center ">
          <div
            onClick={() => prevImageShow()}
            className=" bg-[#202029] w-[50px] h-[50px] flex justify-center items-center cursor-pointer  rounded-full "
          >
            <i class="fa-solid fa-arrow-left"></i>
          </div>

          <div className=" flex gap-[24px] items-center ">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className=" max-h-[600px] w-[600px] rounded-t-full "
            />
            <div className="flex flex-col gap-[48px] text-start text-[32px]">
              <p className="text-[#FFFFFF] text-[48px]">
                {currentImage.title}{" "}
                <span className="text-[#646469]">
                  {subtitleLines.map((line, index) => (
                    <span
                      key={index} 
                      className={index === 1 ? "" : "text-white"} 
                    >
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p>{currentImage.date}</p>
            </div>
            <div></div>
          </div>

          <div
            onClick={() => nextImageShow()}
            className=" bg-[#202029] w-[50px] h-[50px] flex justify-center items-center cursor-pointer  rounded-full  "
          >
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>

      </div>
    )
}

export default RecentSection