import React from "react";
// import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  // const navigate = useNavigate();

  // const handleNavigateToContactMePage = () => {
  //   navigate("/contact");
  // };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I am Vanshita Garg
          <br /> 
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        
      </Animate>
    </section>
  );
};
export default Home;
