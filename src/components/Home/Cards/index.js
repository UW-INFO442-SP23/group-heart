//Gloria
import { Col, Row } from "react-bootstrap";
import { Card } from "./Card";
import Blue_a from "../../../img/grayscale/BlueGray.png";
import Green_a from "../../../img/grayscale/GreenGray.png";
import Orange_a from "../../../img/grayscale/OrangeGray.png";
import Purple_a from "../../../img/grayscale/PurpleGray.png";
import Red_a from "../../../img/grayscale/RedGray.png";
import Yellow_a from "../../../img/grayscale/YellowGray.png";
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
      imgurl_a: Red_a,
      imgurl: Red,
    },
    {
      imgurl_a: Orange_a,
      imgurl: Orange,
    },
    {
      imgurl_a: Yellow_a,
      imgurl: Yellow,
    },
    {
      imgurl_a: Green_a,
      imgurl: Green,
    },
    {
      imgurl_a: Blue_a,
      imgurl: Blue,
    },
    {
      imgurl_a: Purple_a,
      imgurl: Purple,
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
            <Card
              imgurl={i.imgurl}
              imgurl_a={i.imgurl_a}
              color={i.color}
              data={i}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
