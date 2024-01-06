import { useState } from "react";

const GamePage = (props) => {
  return (
    <div>
      <Header />
    </div>
  );
};

const Header = () => {
  const [selectedDice, setSelectedDice] = useState(-1);
  return (
    <div className="flex justify-between m-4 pt-[70px] px-[70px]">
      <div className="text-center">
        <h1 className="font-extrabold text-8xl">0</h1>
        <h2 className="font-bold">Total Score</h2>
      </div>
      <div className="flex-col items-end">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setSelectedDice(idx);
              }}
              className={`px-4 py-4 mx-2 w-[72px] h-[72px] font-bold border-2 border-black ${
                selectedDice === idx
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {item}
            </button>
          );
        })}
        <h2 className="p-3 my-2 text-lg font-bold">Select Number</h2>
      </div>
    </div>
  );
};

export default GamePage;
