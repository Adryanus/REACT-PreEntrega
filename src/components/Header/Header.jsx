import { Nav } from "../Nav/Nav";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      <a href="/" className="logo-link">
    <img
          src="/Public/images/logoDB.jpg"
          alt="Logo de DB Electrónica"
          className="logo"
        />
    </a>
      <Nav />
    </header>
  );
};
