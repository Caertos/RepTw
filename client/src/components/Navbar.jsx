import searchIcon from "../assets/img/search.png";
import "../homeStyle.css";

function Navbar() {
  return (
    <nav className="flex py-1 px-5 fixed h-12 top-0 left-0 z-10 navbarcolor navbarwidth">
      <h1 className="text-white font-extrabold pt-2 sticky">LOGO</h1>
      <ul className="flex space-x-4">
        <li>
          <div>
            <img
              src={searchIcon}
              className="h-4 px-4 fixed top-6 right-49 "
              style={{ opacity: "0.5" }}
            />
          </div>
          <input
            className="px-5 py-2 ml-3 text-right"
            type="text"
            placeholder="Buscar..."
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
