import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header({ setSearch,cartCount }) {
  const handleSearch = (e) => {
    if (setSearch) setSearch(e.target.value.toLowerCase());
  };

  return (
    <nav className="header">
      {/* Logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* Search Bar */}
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search Amazon"
          onChange={handleSearch}
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* Navigation */}
      <div className="header__nav">
        {/* Sign In */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello, Sign in</span>
            <span className="header_optionLineTwo">Account & Lists</span>
          </div>
        </Link>

        {/* Notifications */}
  <div className="header_notification">
    <NotificationsIcon className="notification_icon" />
    <span className="notification_count">3</span>
  </div>


        {/* Cart */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon className="cart_icon" />
            <span className="cart_text">Cart</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;