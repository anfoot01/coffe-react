import "./Header.scss";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="header-prod">
        <Link to="/">
          <span className="header-prod__icon material-symbols-outlined ">
            chevron_left
          </span>
        </Link>
        <span className="header-prod__icon material-symbols-outlined ">
          favorite
        </span>
      </div>
    </>
  );
};
