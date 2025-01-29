const TalentText = ({ text, left, top, rotation }) => {
    return (
      <p
        className={`text-[24px] absolute left-[${left}px] rotate-[${rotation}deg] top-[${top}px] px-[48px] py-[8px] border-white bg-black/30 backdrop-blur-md text-white font-medium rounded-full shadow-md border border-white/20`}
      >
        {text}
      </p>
    );
  };
  
export default TalentText;
  