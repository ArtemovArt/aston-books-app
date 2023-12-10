import React from "react";

import { useGetBooksQuery } from "../../api/booksApi";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./MainPage.scss";

function MainPage() {
  const { data, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <div>Loading...</div>; // TODO: Само собой добавлю сюда компонент Lodaer`а, сейчас решил не раздувать ПР еще больше
  }

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: Если буду успевать, для отображения ошибки тоже сделаю что-то отдельное, пока что так
  }

  return (
    <div>
      <Header />
      <div className="wrapper">
        {/* TODO: Возможно, в дальнейшем стоит добавить отдельный глупый компонент List как контейнер для всех карточек книг, пока что оставил так */}
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
