import Loader from "react-loaders";
import "./index.scss";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import * as AboutAnimation from "../../assets/lottie/about.json";

const About = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: AboutAnimation,
    });
  }, []);

  // const [letterClass, setLetterClass] = useState("text-animate");
  // // const titleArray = ["A", "b", "o", "u", "t", " ", "m", "e"];

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 3000);
  // }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          <h2>
            Fullstack Software Engineer with experience building complex
            software systems delivered to Amazon customers and sellers.
            Regularly took projects from scoping requirements through production
            launches, while regularly contributing to the maintenance of my
            team’s data-precision models. Seeking to leverage proven experience
            to expand my knowledge in ML and data analytics  through project
            leadership.
          </h2>
        </div>

        <div className="stage-cube-cont" ref={container}></div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
