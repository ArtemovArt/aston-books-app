import React from "react";

import Card from "../Card/Card";
import Header from "../Header/Header";
import "./MainPage.scss";

function MainPage() {
  const cardsData = Array(9).fill({
    author: "Михаил Булгаков",
    name: "Мастер и Маргарита",
  });

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="content">
          <div className="cards-field">
            {cardsData.map((book) => (
              <Card author={book.author} name={book.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
