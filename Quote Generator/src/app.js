import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";

const randomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const AppLayout = () => {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://type.fit/api/quotes");
    const json = await data.json();
    setQuotes(json);
    setQuote(randomQuote(json));
  };

  const newQuote = () => {
    setQuote(randomQuote(quotes));
  };

  return (
    <div className="text-center">
      <h1 className="p-4 m-4 text-4xl font-bold">Quote Generator</h1>
      <section className="w-6/12 p-5 m-auto text-black bg-white">
        <button
          className="p-2 mb-2 text-xl border border-2 border-black rounded-lg cursor-pointer"
          onClick={newQuote}
        >
          New Quote
        </button>
        <h3 className="font-bold">"{quote?.text && quote.text}"</h3>
        <h4 className="italic">{quote?.author && quote.author}</h4>
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
