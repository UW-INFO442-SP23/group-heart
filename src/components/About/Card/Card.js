//Gloria
import React from "react";
import { Col } from "react-bootstrap";
export function Card(props) {
  return (
    <>
      <Col md={4} xs={12}>
        <div className="card px-3 carda w-90 h-100">
          <img src={props.pic} alt="abstract art"></img>
          <p>{props.content}</p>
          {props.children}
        </div>
      </Col>
    </>
  );
}
