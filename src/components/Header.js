import React from "react";
import Icons from "./Icons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">MoonBirds Moonie</div>
      <div className="icons">
        <Icons type="twitter" />
        <Icons type="discord" />
        <Icons type="opensea" />
      </div>
    </div>
  );
};

export default Header;
