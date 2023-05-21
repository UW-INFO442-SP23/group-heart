//Gloria
import React from "react";
import { Navbar } from "../Common/Navbar";
import { Footer } from "../Common/Footer";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "./Card/Card";
import img from "../../img/logo.png";
// Aboutpage wireframe (feel free to change it just a wireframe)

// <Header>
// <Mission>
// <Resource>
// <Footer>

export function AboutPage(props) {
  return (
    <div>
      <Navbar />
      <CarouselList />
      <section className="flex-item-two">
        <div className="flex-container-two">
          <Row>
            <RetCard />
          </Row>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const CarouselList = () => {
  const CarouselListdata = [img, img, img];
  return (
    <>
      <Carousel className="m-3 Carsoulaaa" interval={null}>
        {CarouselListdata.map((i, index) => {
          return (
            <Carousel.Item key={index}>
              <section className="flex-item">
                <Row>
                  <Col md={5} sm={12} xs={12} className="d-flex">
                    <div className="f-t-r">
                      <h2> Why Mentorship? </h2>
                      <p>
                        Seniors have abundant life experiences. Their advice and
                        suggestions are valuable for younger generations to face
                        challenges and difficulties in life. Building a bridge
                        between seniors and the younger generation will inspire
                        their motivation to help, learn, and grow together. The
                        story below illustrates how senior mentorships are
                        salient to be beneficial to the younger group.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col md={7} sm={12} xs={12}>
                    <div className="f-t-l">
                      <a href="https://youtu.be/qOp4Y2_g5ZI">
                        <img src={i} className="img-fluid"></img>
                        <img src={img} className="f-t-l-icon"></img>
                      </a>
                    </div>
                  </Col>
                </Row>
              </section>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};
const RetCard = () => {
  const Lidata = [
    {
      content:
        "For students looking to make connections with professionals in their field of study,mentorship can be a valuable resource. It enables students to learn from seasoned experts who have made a name for themselves in their area and receive insights, expertise, and firsthand experience.",
      pic: img,
    },
    {
      content:
        "Furthermore, it gives students the chance to network, acquire career development guidance,and establish connections that will serve them well throughout their professional careers.Mentorship can be a mutually beneficial relationship as the mentee can provide the mentor with new perspectives, ideas, and enthusiasm.",
      pic: img,
    },
    {
      content:
        "Additionally, professionals caan keep current on the most recent advancements in their industry and to give back to the community by imparting their knowledge and experience through this relationship.",
      pic: img,
    },
  ];
  return (
    <>
      {Lidata.map((i, index) => {
        return (
          <Card content={i.content} pic={i.pic} key={index}>
            <div
              className="card-btn"
              {...Lidata[index][`buttonProps${index + 1}`]}
            >
              Read More
            </div>
          </Card>
        );
      })}
    </>
  );
};
