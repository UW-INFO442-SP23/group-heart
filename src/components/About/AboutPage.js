//Gloria
import React from "react";
import { Navbar } from "../Common/Navbar";
import { Footer } from "../Common/Footer";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "./Card/Card";
import img from "../../img/logo1.png";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import card1_img from "../../img/card1.png";
import card2_img from "../../img/card2.png";
import card3_img from "../../img/card3.png";
import img7 from "../../img/img4.png";
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
  const CarouselListdata = [
    {
      title:
        "How might we support kids with color blindness and their families to help raise self esteem and confidence during their early childhood education?",
      content:
        "We will be focusing on colorblind children within the King County area at the elementary school level. Visually impaired children often struggle with keeping up with their peers and undiagnosed color blindness can setback their academic progress and hinder their self esteem. Color-blind kids face several challenges due to their condition, which affects their ability to perceive and differentiate between certain colors.",
      imgurl: img1,
      a: "https://www.youtube.com/watch?v=S9dVaWc7DA4",
    },
    {
      title:
        "How might we support kids with color blindness and their families to help raise self esteem and confidence during their early childhood education?",
      content:
        "We will be focusing on colorblind children within the King County area at the elementary school level. Visually impaired children often struggle with keeping up with their peers and undiagnosed color blindness can setback their academic progress and hinder their self esteem. Color-blind kids face several challenges due to their condition, which affects their ability to perceive and differentiate between certain colors.",
      imgurl: img2,
      a: "https://www.youtube.com/watch?v=GCQE1U2EQ_4",
    },
    {
      title:
        "How might we support kids with color blindness and their families to help raise self esteem and confidence during their early childhood education?",
      content:
        "We will be focusing on colorblind children within the King County area at the elementary school level. Visually impaired children often struggle with keeping up with their peers and undiagnosed color blindness can setback their academic progress and hinder their self esteem. Color-blind kids face several challenges due to their condition, which affects their ability to perceive and differentiate between certain colors.",
      imgurl: img3,
      a: "https://www.youtube.com/watch?v=NHlGiWYI7cY",
    },
  ];
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
                      <h2> {i.title} </h2>
                      <p>{i.content}</p>
                    </div>
                  </Col>
                  <Col md={7} sm={12} xs={12}>
                    <div className="f-t-l">
                      <a href={i.a}>
                        <img src={i.imgurl} className="img-fluid"></img>
                        <img src={img7} className="f-t-l-icon"></img>
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
        "The UN Sustainable Development Goal that we decided to go with is Quality Education. Quality education is a topic that resonates with us all because it allows us to educate and empower the generations to come after us. Our project will encompass an overlooked demographic of children, specifically children who experience life with visual impairments. The topic of visual impairments we will focus on is color blindness and providing resources to children who are color blind as well as their families so that they feel more supported through their educational journey and instill confidence so that they are academically successful. This project will aim to benefit color blind children as well as parents of color blind children that want to learn more to better support their child by providing resources.",
      pic: card1_img,
      a: "https://www.un.org/sustainabledevelopment/education/",
    },
    {
      content:
        "The UN Sustainable Development Goal that we decided to go with is Quality Education. Quality education is a topic that resonates with us all because it allows us to educate and empower the generations to come after us. Our project will encompass an overlooked demographic of children, specifically children who experience life with visual impairments. The topic of visual impairments we will focus on is color blindness and providing resources to children who are color blind as well as their families so that they feel more supported through their educational journey and instill confidence so that they are academically successful. This project will aim to benefit color blind children as well as parents of color blind children that want to learn more to better support their child by providing resources.",
      pic: card2_img,
      a: "https://www.un.org/sustainabledevelopment/education/",
    },
    {
      content:
        "The UN Sustainable Development Goal that we decided to go with is Quality Education. Quality education is a topic that resonates with us all because it allows us to educate and empower the generations to come after us. Our project will encompass an overlooked demographic of children, specifically children who experience life with visual impairments. The topic of visual impairments we will focus on is color blindness and providing resources to children who are color blind as well as their families so that they feel more supported through their educational journey and instill confidence so that they are academically successful. This project will aim to benefit color blind children as well as parents of color blind children that want to learn more to better support their child by providing resources.",
      pic: card3_img,
      a: "https://www.un.org/sustainabledevelopment/education/",
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
              <a href={i.a}>Read More</a>
            </div>
          </Card>
        );
      })}
    </>
  );
};
