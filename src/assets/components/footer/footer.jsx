import "./footer.css";
import icons from "../../icons";

function Footer() {
  return (
    <>
      <img src={icons.logo} alt="" />
      <ul>
        <li>
          <img src={icons.twitter} alt="" />
        </li>
        <li>
          <img src={icons.facebook} alt="" />
        </li>
        <li>
          <img src={icons.instagram} alt="" />
        </li>
      </ul>
      <p>Copywright 2020 Bella Onojie.com</p>
    </>
  );
}

export default Footer;
