import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const API_URL = "https://github.com";

const AppLayout = () => {
  const [res, setRes] = useState([]);

  const fetchData = async (searchString) => {
    const data = await fetch(`${API_URL}/search?q=${searchString}&type=users`);
    const json = await data.json();
    console.log(json);
    setRes(json?.payload?.results);
  };

  const handleSubmit = async (elem) => {
    elem.preventDefault();
    const searchStr = elem?.target?.searchStr?.value;
    await fetchData(searchStr);
    elem.target.reset();
  };

  return (
    <div className="text-center">
      <h1 className="p-4 m-4 text-4xl font-bold">Github User Search</h1>
      <div className="flex">
        <section className="justify-center p-5 m-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchStr"
              placeholder="Enter username or email"
              className="w-8/12 p-2 border-2 border-black"
            ></input>
            <button className="p-2 mx-2 bg-green-300">Search</button>
          </form>
        </section>
      </div>
      {res.length > 0 && (
        <div>
          <h3 className="text-xl">Results</h3>
          <div className="">
            {res.map((elem) => {
              return (
                <User
                  avatar_url={elem.avatar_url}
                  display_login={elem.display_login}
                  hl_profile_bio={elem.hl_profile_bio}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const User = ({ avatar_url, display_login, hl_profile_bio }) => {
  return (
    <div className="w-6/12 p-2 m-auto my-2 border-2 border-black">
      <img
        className="m-auto"
        src={avatar_url}
        alt="Profile"
        width="50"
        height="50"
      ></img>
      <a href={hl_profile_bio} target="_blank" rel="noopener noreferrer">
        {display_login}
      </a>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
