import React from 'react';
import { Square } from './Square.js';
import CARDSDATA from '../../data/cards.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Cards() {
  const generalpath = "https://github.com/UW-INFO442-SP23/group-heart/tree/main";

  const cardElems = CARDSDATA.map((item) => {
    return (
      <Square
        key={item.title}
        id={item.id}
        title={item.title}i
        description={item.description}
      />
    );
  });

  const splitCards = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const rowsOfCards = splitCards(cardElems, 3);

  return (
    <Container>
      {rowsOfCards.map((row, index) => (
        <Row key={index}> 
          {row.map((card) => (
            <Col className="col-flex" key={card.key}>
              {card}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}


