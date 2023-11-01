const Content = () => {
  return (
    <main className="flex justify-center items-center mt-4 height-[6/12] w-[1100px] m-auto ">
      <div className="flex-col gap-[36px] mt-16">
        <h1 className="uppercase text-9xl text-bold line-height-[108px]">
          Your Feet Deserve the Best
        </h1>
        <p className="py-2 mb-8 text-gray-600 uppercase">
          Your feet deserve the Best and we are here to help you with our shoes.
          Your feet deserve the best and we are here to help you.
        </p>
        <div className="flex gap-[40px]">
          <button className="p-4 text-xl text-white bg-red-700 rounded-lg">
            Shop Now
          </button>
          <button className="p-4 text-gray-800 border-2 border-black rounded-lg">
            Category
          </button>
        </div>
      </div>
      <img
        className="flex w-6/12 h-6/12"
        src="https://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-19.png"
      ></img>
    </main>
  );
};

export default Content;
