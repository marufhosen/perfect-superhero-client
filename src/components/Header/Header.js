import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="header-item" to="/interview">Interview</Link>
        </li>
        <li>
          <Link className="header-item" to="/createSuperHero">Create Superhero</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
