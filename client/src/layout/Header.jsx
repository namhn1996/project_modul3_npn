import React from "react";
import "../css/Header.css";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid n-navbar">
          <div className="navbar-brand ">
            <a className="navbar-brand " href="#">
              <i className="fa-solid fa-house"></i> Trang chủ
            </a>
          </div>
          <div className="navbar-brand ">
            <a className="navbar-brand" href="#">
              <i className="fa-solid fa-newspaper"></i> Tin tức
            </a>
          </div>
          <div className="navbar-brand ">
            <a className="navbar-brand" href="#">
              <i className="fa-solid fa-users"></i> Tuyển dụng
            </a>
          </div>
          <div className="navbar-brand">
            <a className="navbar-brand" href="#">
              <i className="fa-solid fa-book"></i> Giới thiệu
            </a>
          </div>
          <div className="navbar-brand">
            <a className="navbar-brand" href="#">
              <i className="fa fa-wrench"></i> Bảo hành
            </a>
          </div>
          <div className="navbar-brand">
            <a className="navbar-brand" href="#">
              <i className="fa-solid fa-phone"></i> Liên hệ
            </a>
          </div>
        </div>
      </nav>
      <div className="navbar-collapse d-flex" id="navbarSupportedContent">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="logo">
          <img className="logo" src=".../public/img/logo.png" alt="" />
        </div>
        <div className="container-fluid navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-end">
          <div className="navbar-brand ">
            <a className="navbar-brand " href="#">
              <i class="fa-solid fa-user"></i> Tài khoản
            </a>
          </div>
          <div className="navbar-brand ">
            <a className="navbar-brand " href="#">
              <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
