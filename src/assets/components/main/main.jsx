import "./main.css";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";

function Main() {
  return (
    <>
      <section className="section1">
        <Section1 />
      </section>
      <section className="section2">
        <Section2/>
      </section>
      <section className="section1 section3">
        <Section3/>
      </section>
    </>
  );
}

export default Main;
