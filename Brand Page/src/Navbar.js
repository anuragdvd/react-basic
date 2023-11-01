const Navbar = () => {
  return (
    <div className="flex justify-between p-4 m-auto h-[124px] w-[1270px] items-center">
      <div>
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Nike-logo-png-text-icon-black.png"
          alt="logo"
          className="w-[144px] h-[72px]"
        ></img>
      </div>
      <ul className="flex text-xl uppercase list-none gap-[32px] mt-4 text-black">
        <li>menu</li>
        <li>location</li>
        <li>about</li>
        <li>Contact</li>
      </ul>
      <button className="px-4 py-4 text-xl text-white bg-red-700">Login</button>
    </div>
  );
};

export default Navbar;
