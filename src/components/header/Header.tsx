import React from "react";
import navbatLogo from "../../assets/navbat.png";
import {Link} from "react-router-dom";


const Header: React.FC = () => {
  return (
    <header className="flex items-center mx-auto justify-between  p-6 max-w-xl w-full">
      <Link to="/">
        <img src={navbatLogo} alt="Navbat" className="h-4" />
      </Link>
      <button className="text-gray-600">
        <i className="fas fa-user text-xl"></i>
      </button>
    </header>
  );
};

export default Header;
