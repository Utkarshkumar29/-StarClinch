import TalentText from "../talentText"

const TalentSection=()=>{
    return(
        <div className="relative flex items-center justify-center min-h-screen bg-[#080810] overflow-hidden">
        <div
          className="absolute left-[-200px]  w-[700px] h-[700px] bg-[#542440] rounded-full "
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 70%)",
          }}
        ></div>

        <div
          className="absolute right-[-200px]  w-[700px] h-[700px] bg-[#542440] rounded-full opacity-40 "
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,) 30%, rgba(0,0,0,1) 70%)",
          }}
        ></div>

        <div className=" overflow-hidden relative bg-black/30 backdrop-blur-md text-white font-medium shadow-md border border-white/20  text-center mx-[240px] w-[1800px] h-[730px] p-[48px] rounded-full flex flex-col gap-[80px] ">
          <div className=" relative mt-10 ">
            <p className=" absolute -rotate-[20deg] text-[#d6608f] text-[28px] left-[200px] ">
              We are the team of
            </p>
            <p className=" text-[84px] text-[#FFFFF] ">20+ Talented Folks</p>
            <TalentText text="Fun" left={280} top={70} rotation={-20} />
                <span className=" text-[28px] absolute right-[280px] rotate-[20deg] top-[-10px] px-[48px] py-[12px]  border-white  bg-black/30 backdrop-blur-md text-white  font-medium  rounded-full shadow-md border border-white/20 ">
                Inclusive
                </span>
          </div>

          <div>
            <p className=" text-[32px] leading-[48px] text-[#FFFFFF] ">
              From passion-driven dedication to impactful contribution,
              <br /> we do it all here. We are growing and will be excited to
              hear,
              <br /> from you!
            </p>
          </div>

          <div className=" flex justify-center items-center ">
            <p className="  whitespace-nowrap text-[28px] leading-[24px] py-[24px] px-[64px] rounded-full bg-gradient-to-r from-[#c44937] to-[#ca2e5b] max-w-[400px] ">
              Join our team  <i className="fas fa-arrow-right"></i>{" "}
            </p>
          </div>

          <div className="  absolute bottom-[100px] hover:bottom-[130px] flex justify-center items-center w-full opacity-30 hover:opacity-100 hover:scale-125 transition transition-opacity  ">
          <TalentText text="Focused" left={280} top={50} rotation={20} />
      <TalentText text="Collaborative" left={400} top={30} rotation={-20} />
      <TalentText text="United" left={550} top={50} rotation={20} />
      <TalentText text="Vibrant" left={680} top={30} rotation={-20} />
      <TalentText text="Dynamic" left={800} top={50} rotation={20} />
      <TalentText text="Motivated" left={920} top={50} rotation={-20} />
          </div>
        </div>
      </div>
    )
}

export default TalentSection