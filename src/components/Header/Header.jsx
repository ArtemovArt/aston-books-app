import { Button } from "@mui/base";

import "./style.scss";

function Header() {
  return (
    <div className="main-header-container">
      <div className="navigation-bar">
        <p className="book-link">Все книги</p>
        <p className="book-link">Избранное</p>
        <p className="book-link">История</p>
      </div>
      <div className="login-section">
        <Button className="login-button">Войти</Button>
      </div>
    </div>
  );
}

export default Header;