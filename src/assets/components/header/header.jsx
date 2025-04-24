import "./header.css";
import icons from "../../icons";

function Header() {
  return (
    <>
      <img src={icons.logo} alt="" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">Faq</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
