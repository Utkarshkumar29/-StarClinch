import React, { useState, useEffect } from "react";
import star1 from "../../assets/star1.avif";
import star2 from "../../assets/star2.avif";
import star3 from "../../assets/star3.avif";

const HeroSection=()=>{

    const [personIndex, setPersonIndex] = useState(0);
    const handlePersonsChanges = () => {
        if (personIndex < 2) {
          setPersonIndex(personIndex + 1);
        }
      };
      const persons = [star1, star2, star3];
      const personsText = ["Singers", "Comedians", "Dancers"];
    
      const [key, setKey] = useState(0);

      useEffect(() => {
          setKey((prev) => prev + 1);
        }, [personIndex]);

    return(
        <div className=" p-[60px] flex justify-center items-center flex-row gap-[4px] w-full ">
        <div className=" w-[60%] ">
          <div className=" relative w-full flex justify-center items-center flex-col gap-[32px]  ">
            <p
              className={` absolute top-[50%] left-[0%] text-[120px] text-animation  transition text-animation `}
              key={key}
            >
              {personsText[personIndex]}
            </p>
            <div
              className="  p-[16px] bg-gradient-to-r from-[#c44937] to-[#ca2e5b] rounded-full"
              onClick={() => handlePersonsChanges()}
            >
              <img
                src={persons[personIndex]}
                alt="Person"
                width={800}
                height={800}
                className="rounded-full aspect-square object-cover object-center"
              />
            </div>
            <p className=" text-center text-[#404047] text-[32px] ">
              Click here to view more
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-[64px] ">
          <p className=" text-[64px] text-[#7e7e82] ">
            Choose <br /> from{" "}
            <span className=" text-white ">
              100+
              <br /> Categories
            </span>
          </p>
          <p className=" text-[48px] bg-gradient-to-r from-[#b66481] to-[#c76055] bg-clip-text text-transparent whitespace-nowrap">
            Explore all categories <i className="fas fa-arrow-right"></i>
          </p>
        </div>
      </div>
    )
}

export default HeroSection