// import { useState } from "react";
import Loader from "react-loaders";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import * as ContactAnimation from "../../assets/lottie/contact.json";

const Contact = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: ContactAnimation,
    });
  }, []);
  // const [letterClass] = useState("text-animate");
  // const form = useRef();

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 3000);
  // }, []);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("gmail", "template_uik56od", form.current, "your-token")
  //     .then(
  //       () => {
  //         alert("Message successfully sent!");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("Failed to send the message, please try again");
  //       }
  //     );
  // };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            Contact Me
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            /> */}
          </h1>
          <h2>
            I am interested in full time and part-time opportunities -
            especially on front-end focused projects and AI based ones. However,
            if you have any other requests or questions, don't hesitate to
            contact me using the form below.
          </h2>
          <div className="contact-form">
            <form>
              {/* <form ref={form} onSubmit={sendEmail}> */}

              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="animation-container" ref={container}></div>
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default Contact;
