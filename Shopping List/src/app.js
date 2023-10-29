import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const AppLayout = () => {
  const [items, setItems] = useState([]);

  const addItem = (elem) => {
    elem.preventDefault();
    const item = elem?.target?.item?.value;
    const newItems = [...items, item];
    setItems(newItems);
    elem.target.reset();
  };

  const deleteItem = (elem) => {
    const newItems = items.filter((item) => {
      return item !== elem;
    });
    setItems(newItems);
  };

  return (
    <div className="text-center">
      <h1 className="p-4 m-4 text-4xl font-bold">Shopping List</h1>
      <section className="w-6/12 m-auto text-center bg-white border-2 border-black border-dotted rounded-lg">
        <h1 className="p-2 m-2 text-2xl font-bold">Items to buy</h1>
        <form onSubmit={addItem}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            className="p-2 border-2 border-black"
          ></input>
          <button className="p-2 m-2 text-white bg-black border-2 border-black">
            Add
          </button>
        </form>
        <div className="w-7/12 py-2 m-auto text-left">
          <ul>
            {items.length > 0 &&
              items.map((elem, index) => {
                return (
                  <Items
                    key={index}
                    item={elem}
                    deleteItem={deleteItem}
                  ></Items>
                );
              })}
          </ul>
        </div>
      </section>
    </div>
  );
};

const Items = ({ item, deleteItem }) => {
  return (
    <div>
      <li className="pt-1 text-m">
        {item}
        <button
          className="float-right text-red-400"
          onClick={() => {
            deleteItem(item);
          }}
        >
          x
        </button>
      </li>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
