import React from "react";
// Sections
//import TopNavbar from "../components/Nav/TopNavbar";
import TopNavbar from "../components/landPage/customNav/customTopBar";
//import Header from "../components/Sections/Header";
import Header from "../components/landPage/Sections/customHeader";

//import Services from "../components/Sections/Services";
import Services from "../components/landPage/Sections/customServices";
//import Projects from "../components/Sections/Projects";
import Projects from "../components/landPage/Sections/customProjects";
//import Blog from "../components/Sections/Blog";
import Blog from "../components/landPage/Sections/customBlog";
//import Pricing from "../components/Sections/Pricing";
import Pricing from "../components/landPage/Sections/customPricing";
//import Contact from "../components/Sections/Contact";
import Contact from "../components/landPage/Sections/customContact";
//import Footer from "../components/Sections/Footer"
import Footer from "../components/landPage/Sections/customFooter/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


