import React, { Fragment } from "react";
import "src/style/flexboxgrid.min.css"
import "./index.css"

import Home from "src/components/landPage/Sections/customHome";
import Vision from "src/components/landPage/Sections/customVision";
import Projects from "src/components/landPage/Sections/customProjects";
import Testimonial from "src/components/landPage/Sections/customTestimonial";
import Contact from "src/components/landPage/Sections/customContact";
import Footer from "src/components/landPage/Sections/customFooter/Footer";
import TopNavbar from "src/components/landPage/customNav/customTopBar";
import About from "src/components/landPage/Sections/customAbout";
import { abort } from "process";

export default function Landing() {
  return (
    <Fragment>
      <TopNavbar />
      <Home />
      <Vision />
      <Projects />
      <Testimonial/>
      <About/>
      <Contact />
      <Footer />
    </Fragment>
  );
}


