import React from "react";
import { Navbar } from "../Common/Navbar";
import { Footer } from "../Common/Footer";
import Carousel from "react-bootstrap/Carousel";
import img from "../../img/newhomeimg.png";
import { Col, Row } from "react-bootstrap";
import { Cards } from "./Cards";
export function HomePage(props) {
  //Gloria
  return (
    <div>
      <Navbar />
      <main>
        <CarouselList />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

//Gloria
const CarouselList = () => {
  const CarouselListdata = [img, img, img];
  return (
    <>
      <div className="Carsoulaaa">
        <section className="flex-item">
          <Row style={{ marginBottom: "0px" }}>
            <Col md={6} sm={12} xs={12} className="d-flex">
              <div className="f-t-r">
                <h2> Welcome to Rainbow! </h2>
                <p>
                  Colors are beautiful, but not everyone can see them. We aspire
                  to help colorblind children learn colors through education.
                </p>
              </div>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <div className="f-t-l">
                <img src={img} className="img-fluid img-theadaptive"></img>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};
