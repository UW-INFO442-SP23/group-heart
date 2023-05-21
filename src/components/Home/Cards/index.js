//Gloria
import { Col, Row } from "react-bootstrap";
import { Card } from "./Card";
import Blue from "../../../img/color/Blue.png";
import Green from "../../../img/color/Green.png";
import Orange from "../../../img/color/Orange.png";
import Purple from "../../../img/color/Purple.png";
import Red from "../../../img/color/Red.png";
import Yellow from "../../../img/color/Yellow.png";
import CARDSDATA from "../../../data/cards.json";
export const Cards = () => {
  const cardsLists = [
    {
      imgurl: Blue,
      color: "blue",
    },
    {
      imgurl: Green,
      color: "Green",
    },
    {
      imgurl: Red,
      color: "Red",
    },
    {
      imgurl: Yellow,
      color: "Yellow",
    },
    {
      imgurl: Orange,
      color: "Orange",
    },
    {
      imgurl: Purple,
      color: "Purple",
    },
  ];
  const c_data = CARDSDATA.map((i, index) => {
    return {
      ...i,
      ...cardsLists[index],
    };
  });
  return (
    <>
      <Row>
        {c_data.map((i, index) => (
          <Col lg={4} md={6} xs={12} key={index}>
            <Card imgurl={i.imgurl} color={i.color} data={i} />
          </Col>
        ))}
      </Row>
    </>
  );
};
