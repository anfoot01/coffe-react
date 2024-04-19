import { Link } from "react-router-dom";
import "/src/shared/components/Header/Header.scss";
import { useState } from "react";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";

export const Header = () => {
  const [navIsActive, setNavIsActive] = useState(false);

  return (
    <div className="header">
      <div className="menu" onClick={() => setNavIsActive(true)}>
        <span className="material-symbols-outlined icon">menu</span>
      </div>
      <div className="log">
          <span className="material-symbols-outlined">login</span>
      </div>
      {
        <HeaderMenu
          navIsActive={navIsActive}
          navClose={() => setNavIsActive(false)}
        />
      }
    
    </div>
  );
};
