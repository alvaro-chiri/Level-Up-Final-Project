import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => (
  <>
    <div
      id="hero"
      className="hero section-bg initialStart"
      style={{
        padding: "45px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6  text-center text-lg-start">
            <img
              src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="img-fluid"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
          </div>

          <div
            className="col-lg-6 order-2  d-flex flex-column justify-content-center align-items-lg-start text-center text-lg-start"
            style={{ display: "flex" }}
          >
            <h2 data-shadow="logo" style={{ fontSize: "95px" }}>
              Level up
            </h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <Link to="/search" style={{textDecoration: "none"}}>
              <button
                type="button"
                className="button-35"
                style={{ paddingRight: "10px" }}
              >
                Get Trained
              </button></Link>
              <Link to="/signup/" style={{textDecoration: "none"}}>
              <button type="button" className="button-39">
                Become a Trainer
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="topPart" style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "4%",
          alignContent: "center",
          margin: "0px 70px 0px 70px",
        }}
      >
        <div style={{ alignItems: "center" }}>
          <h1 style={{ textAlign: "center", fontSize: "40px" }}>
            Level up with us
          </h1>

          <p
            className="paragraph-1"
            style={{ textAlign: "center", fontSize: "50px" }}
          >
            Let us help you find the fitness instructor you deserve
          </p>
        </div>
        <div
          style={{ display: "inline-block", width: "60%", margin: "0 auto" }}
        >
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/early-30s-male-athlete-doing-renegade-row-pushups-at-gym-picture-id1282804431?b=1&k=20&m=1282804431&s=170667a&w=0&h=HNM3n7HaVqtHFizQUCXYM9ELMdVa5yUqPDyEAJ4Zss0="
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="carouselHeader">Personal Training</h3>
                <p className="carouselParagraph">
                  From learning proper form, to gaining strength. Let us help
                  you find the right personal trainer for you
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://fitintennis.com/wp-content/uploads/2018/12/Tennis-equipment-2-1200x800.jpg"
                alt="personal trainer"
              />

              <Carousel.Caption>
                <h3 className="carouselHeader">Tennis Instructors</h3>
                <p className="carouselParagraph">
                  Find a local tennis instructor{" "}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/young-golf-pro-coaching-a-man-on-his-golf-swing-picture-id928779644?k=20&m=928779644&s=612x612&w=0&h=wjh_EJ-G16TzP_Rte6LzLFb5GubCk1EkLIQBKPICX74="
                alt="Golf instructor"
              />

              <Carousel.Caption>
                <h3 className="carouselHeader">Golf Instructors</h3>
                <p className="carouselParagraph">
                  Tone up your technique, and sharpen your skills.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/personal-yoga-trainer-picture-id854067898?k=20&m=854067898&s=612x612&w=0&h=Vh-M7RlEEap8_ATBZQH3EML74kA6AeFjOv40KhjbGrE="
                alt="Golf instructor"
              />

              <Carousel.Caption>
                <h3 className="carouselHeader">Yoga Teachers</h3>
                <p className="carouselParagraph">
                  One on One with a Yoga instructor.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.squarespace-cdn.com/content/v1/58d09402db29d660e4781a57/1614813006338-ASFWR5YDNMF5F65LGXE6/_Wilhite_Brad_FerrisWheel-0160+%281%29.jpg"
                alt="Yoga Teacher"
              />

              <Carousel.Caption>
                <h3 className="carouselHeader">
                  Group Activities / Outdoor Activities
                </h3>
                <p className="carouselParagraph">
                  Find group activities like yoga, and bootcamps.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
    <div className="aboutMe" style={{ maxWidth: "100%", paddingTop: "5%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <a id="aboutUs"><h1 className="aboutUs" style={{ textAlign: "center" }}>
          About us
        </h1></a>
        <p className="aboutUsParagraph" style={{ margin: "0px 70px 0px 70px" }}>
          Level Up was founded on the sole foundation of progression, and
          determination. Finding your fitness instructor is at now at the palm
          of your hands. Using your location, we are able to provide you with
          instructors that fit your needs. We currently offer Personal trainers,
          Tennis instructors, Golf instructors, and Yoga teachers. We also plan
          on adding Group fitness activities in the near future. Certified
          Instructors are also able to create an account, and offer their
          services.
        </p>
      </div>
    </div>
  </>
);
