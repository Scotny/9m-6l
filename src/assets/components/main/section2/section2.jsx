import "./section2.css";
import icons from "../../../icons";

function Section2() {
  return (
    <>
      <img className="two_phones" src={icons.two_phones} alt="" />
      <h2>How the app works</h2>
      <div className="instruction">
        <img src={icons.phone1} alt="" />
        <div className="text">
          <h4>Create an account</h4>
          <h3>Create/login to an existing account to get started</h3>
          <p>An account is created with your email and a desired password</p>
        </div>
      </div>
      <div className="instruction reverse">
        <img src={icons.phone2} alt="" />
        <div className="text">
          <h4>Explore varieties</h4>
          <h3>Shop for your favorites meal as e dey hot.</h3>
          <p>
            Shop for your favorite meals or drinks and enjoy while doing it.
          </p>
        </div>
      </div>
      <div className="instruction">
        <img src={icons.phone3} alt="" />
        <div className="text">
          <h4>Checkout</h4>
          <h3>When you done check out and get it delivered.</h3>
          <p>When you done check out and get it delivered with ease. </p>
        </div>
      </div>
    </>
  );
}

export default Section2;
