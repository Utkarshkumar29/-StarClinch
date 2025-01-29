import React, { useState, useEffect } from "react";
import star1 from "../../assets/star1.avif";
import star2 from "../../assets/star2.avif";
import star3 from "../../assets/star3.avif";
import photo1 from "../../assets/photo_1.jpg";
import photo2 from "../../assets/photo_2.jpg";
import photo3 from "../../assets/photo_3.webp";
import group from "../../assets/group.jpg";


 const images = [
    {
      src: group,
      position: "top-[400px] right-[15%]",
      transition: "transition-all duration-500 ease-in-out",
    },
    {
      src: star1,
      position: "top-[140px] right-[43%] ",
      transition: "transition-all duration-500 ease-in-out",
    },
    {
      src: star2,
      position: "top-[400px] left-[15%]",
      transition: "transition-all duration-500 ease-in-out",
    },
    {
      src: star3,
      position: "top-[800px] right-[5%]",
      transition: "transition-all duration-500 ease-in-out",
    },
  ];


const MeetSection=()=>{

    const [imageOrder, setImageOrder] = useState(images);
    
      const getUpdatedPosition = (index) => {
        const positions = [
          "top-[140px] right-[43%] ",
          "top-[400px] right-[15%]",
          "top-[400px] left-[15%]",
          "top-[800px] right-[5%]",
        ];
        return positions[index];
      };
    
      const updateImageOrder = (newOrder) => {
        setImageOrder(
          newOrder.map((img, index) => ({
            ...img,
            position: getUpdatedPosition(index),
          }))
        );
      };
    
      const nextImage = () => {
        setImageOrder((prevImages) => {
          const newImages = [...prevImages]
          const firstImage = newImages.shift()
          newImages.push(firstImage)
          updateImageOrder(newImages)
          return newImages
        });
      };

      const prevImage = () => {
        setImageOrder((prevImages) => {
          const newImages = [...prevImages]
          const lastImage = newImages.pop()
          newImages.unshift(lastImage)
          updateImageOrder(newImages)
          return newImages
        });
      };

    return(
        <div className=" relative bg-[#080810] mt-[120px] text-center ">
        <p className=" text-[48px] mb-10 ">Meet Our Starclinch Squad</p>

        <div className="bg-[#080810] flex justify-center items-center flex-col gap-[64px] h-full -z-10 p-[32px] ">
          {imageOrder.map((img, index) => (
            <img
              key={index}
              src={img.src}
              width={300}
              height={300}
              alt={`Image ${index + 1}`}
              className={` ${
                index != 1 && "rounded-full"
              } absolute max-h-[300px] max-w-[300px]  transition-all duration-500  border-4 border-white 
              ${img.position} z-10 ${img.transition} 
            `}
            />
          ))}
          <div className=" flex flex-col gap-[32px] w-[80%] min-h-[1200px] h-full bg-[#0b0b16] clip-path-dome relative items-center justify-center overflow-hidden">
            <p className=" py-[12px] px-[48px] bg-gradient-to-b from-[#285e23] to-[#0a0a12] rounded-full text-white font-thin text-[24px] ">
              5 Members
            </p>
            <p className=" text-white text-[52px] ">Tech Titans</p>
            <p className=" text-[#7b7b7f] text-[24px] ">
              The reason I did not accepted answer was that
              <br /> I had that path entry already. The reason it was not
              working
            </p>
            <p className=" text-[#285e23] text-[24px] leading-[24px] ">
              Our Design Team is growing. Apply Now{" "}
            </p>
          </div>
        </div>
    
        <div className="flex gap-[400px] absolute top-[170px] w-full  justify-center ">
          <button
            onClick={prevImage}
            className="bg-[#202029] w-[50px] h-[50px] flex justify-center items-center cursor-pointer  rounded-full "
          >
            <i className="fas fa-arrow-left"></i> 
          </button>
          <button
            onClick={nextImage}
            className="bg-[#202029] w-[50px] h-[50px] flex justify-center items-center cursor-pointer  rounded-full "
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    )
}

export default MeetSection