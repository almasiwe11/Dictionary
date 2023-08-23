import React from "react";
import Switcher from "./Parts/Switcher";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="select">
        <select name="" id="">
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="sans-serif"> Mono</option>
        </select>
        <ArrowDown />
      </div>
      <div className="line"></div>
      <Switcher />
      <Moon />
    </div>
  );
}

export default Header;

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="38"
      viewBox="0 0 34 38"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#838383"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
        <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
        <path d="M11 9h12" />
      </g>
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
    >
      <path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6" />
    </svg>
  );
}

function Moon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <path
        fill="none"
        stroke="#838383"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
      />
    </svg>
  );
}
