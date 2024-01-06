import image from "../dices.png";

const LandingPage = (props) => {
  return (
    <div className="h-[100vh] flex flex-wrap items-center justify-center w-11/12 m-auto">
      <img src={image} className="basis-4/12"></img>
      <div className="flex flex-wrap justify-end">
        <h1 className="font-extrabold text-8xl">DICE GAME</h1>
        <button
          className="w-4/12 p-4 m-4 text-white bg-black border-2 border-black rounded-lg cursor-pointer hover:bg-white hover:text-black"
          onClick={() => props.togglePage()}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
