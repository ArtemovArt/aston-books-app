import { Button } from "@mui/base";
// import SvgIcon1 from "./icons/SvgIcon1";
// import SvgIcon2 from "./icons/SvgIcon2";
// import SvgIcon3 from "./icons/SvgIcon3";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import messages from "./messages.json";
import "./style.scss";

function Header() {
  return (
    <div className="main-header-container">
      <div className="book-section">
        <img className="image-container img-content-aaaa19ed" alt="logo" />
      </div>
      <div className="navigation-bar">
        <p className="book-link">{messages.books}</p>
        <p className="book-link">{messages.authors}</p>
        <p className="book-link">{messages.what_read}</p>
        <p className="book-link">{messages.favorites}</p>
      </div>
      <div className="login-section">
        <IconButton aria-label="search">
          <SearchIcon htmlColor="#FFFFFF" fontSize="large" />
        </IconButton>

        <Button className="login-button">{messages.login}</Button>
      </div>
    </div>
  );
}

export default Header;
