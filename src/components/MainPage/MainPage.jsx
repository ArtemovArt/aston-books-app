import React from "react";

import { useGetBooksQuery } from "../../api/booksApi";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./MainPage.scss";

function MainPage() {
  const { data, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="content">
          <div className="cards-field">
            {data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                author={item.author}
                title={item.title}
                cover={item.cover}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
