const TalentText = ({ text, left, top, rotation }) => {
    return (
      <p
        style={{ left: `${left}px`, top: `${top}px`, transform: `rotate(${rotation}deg)` }}
        className="text-[24px] absolute px-[48px] py-[8px] border-white bg-black/30 backdrop-blur-md text-white font-medium rounded-full shadow-md border border-white/20"
      >
        {text}
      </p>
    );
  };
  