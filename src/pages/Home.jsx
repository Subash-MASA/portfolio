import CollapsibleExample from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Projects from "../components/Projects/Projects";
import WorkExprience from "../components/WorkExprience/WorkExprience";
import Footer from "../components/Footer/Footer";
import Resume from "../assets/projects-image/resume.pdf";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY; // How far the user has scrolled
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // Total scrollable height
      const scrollPercent = (scrollTop / docHeight) * 100; // Calculate scroll percentage
      setScrollProgress(scrollPercent); // Update progress bar width
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener on unmount
    };
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div id="nav">
        <CollapsibleExample />
      </div>
      <div className="banner">
        <div class="container">
          <div class="row py-5">
            <div
              class="col-xl-6  py-5 mb-5 text-center text-lg-start  "
              data-aos="zoom-out"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 class="py-3">Hi, I'm Subash,</h1>
              <h2 class="pb-3">
                Focused and self-motivated developer 1 year 8 months of
                experience in Web development in React JS.
                <br />
                Interested to learn and work in latest and new technologies
              </h2>
              <h2>Contact Us</h2>
              <h2>
                <span>phone :</span>+91 8760636247
              </h2>
              <h2>
                <span>Email :</span>subashnss7@gmail.com
              </h2>
              <div class="nav-btn mb-5 nav-btn-1 mt-4">
                <a href={Resume} download="Subash_Resume.pdf">
                  <button type="button" class="btn btn-outline-danger">
                    Get Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel />

      <section class="about my-5 py-5" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-2 py-5 text-center text-lg-start  ">
              <div
                class="abo "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <h2 class=" fs-1">Skills</h2>
              </div>
            </div>
            <div class="col-lg-6 mt">
              <div class="row">
                <div class="col-lg-6 mt-3 col-md-6 ">
                  <div
                    class="ab-1 text-center text-lg-start  "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    <div class="inner-box">
                      <h4 class="">Languages & Web Technologies </h4>
                      <p class="">
                        React.Js & Typescript, Ajax. .Net Core (Beginner),
                        C#(Beginner)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mt-3  col-md-6">
                  <div
                    class="ab-1 text-center text-lg-start  "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    <div class="inner-box ">
                      <h4 class="">Scripting</h4>
                      <p class="">Jquery, HTML, Javascript, CSS</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="ab-1 text-center text-lg-start  ">
                    <div
                      class="inner-box"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      <h4>Responsive CSS Frameworks</h4>
                      <p>Bootstrap, Material-UI</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6  col-md-6 ">
                  <div
                    class="ab-1 text-center text-lg-start  "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    <div class="inner-box">
                      <h4>Productivity tools</h4>
                      <p>Visual Studio, VS Code, MS SQL (Beginner)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <WorkExprience />
      <section className="contact py-5" id="contact">
        <div className="container">
          <div
            className="header-sec"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <h1 style={{ color: "#000" }}>CONTACT</h1>
          </div>
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="col-lg-12 col-md-12">
                <div
                  className="cont"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div className="contact-1">
                    <span>
                      <iconify-icon icon="bx:map"></iconify-icon>
                    </span>
                  </div>
                  <div className="contact-2">
                    <h1>Our Address</h1>
                    <p>
                      3.1.88 Bharathi Nagar,
                      <br />
                      Sambavarvadakarai 627-856,
                      <br />
                      Tenkasi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-lg-6 col-md-6 style">
              <div
                className="cont m-0"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="contact-1">
                  <span>
                    <iconify-icon icon="bx:phone-call"></iconify-icon>
                  </span>
                </div>
                <div className="contact-2">
                  <h1>Call Us</h1>
                  <p>+91 8760636247</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="cont m-0"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="contact-1">
                  <span>
                    <iconify-icon icon="bx:envelope"></iconify-icon>
                  </span>
                </div>
                <div className="contact-2">
                  <h1>Email Us</h1>
                  <p>subashnss7@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
