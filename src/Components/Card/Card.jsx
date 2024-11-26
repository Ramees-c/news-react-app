import React from "react";

function Card({ newsData }) {
  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="cardContainer">
      {newsData.map((news, index) => {
        if (!news.urlToImage) {
          return null;
        } else {
          return (
            <div key={index} className="card">
              <img src={news.urlToImage} alt="" />
              <div className="card-container">
                <a>{news.title}</a>
                <p>{news.description}</p>
                <button onClick={() => readMore(news.url)}>Read More</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Card;
