import React from "react";
import About from "../component/Front-page/About";
import Footer from "../component/Front-page/Footer";
import Hero from "../component/Front-page/Hero";
import Team from "../component/Front-page/Team";
import Demo from "../component/Front-page/Demo";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Demo />
      <Footer />
    </>
  );
};

export default Home;
