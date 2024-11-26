import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

import { API_KEY } from "../../ApiService/ApiService";

function NewsApp() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);

  const getData = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    setNewsData(response.data.articles);
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input
            onChange={handleSearchInput}
            type="text"
            placeholder="Search News"
            value={search}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Update with TrendyNews</p>
      </div>

      <div className="categoryBtn">
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="politics">
          Politics
        </button>
        <button onClick={userInput} value="entertainment">
          Entertainment
        </button>
        <button onClick={userInput} value="health">
          Health
        </button>
        <button onClick={userInput} value="fitness">
          Fitness
        </button>
      </div>

      <div>{newsData ? <Card newsData={newsData} /> : null}</div>
    </div>
  );
}

export default NewsApp;
