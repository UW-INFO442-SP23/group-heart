//Gloria
import React, { useEffect, useRef } from "react";
import { MyModel } from "../../../Common/MyModel";
import { Row, Col } from "react-bootstrap";
export const Card = (Props) => {
  const [lokbol, setLokbol] = React.useState(false);
  const modalref = useRef(null);
  const {
    data: { description, title, video, img_path, img_alt },
  } = Props;
  useEffect(() => {
    if (lokbol && modalref.current) {
      modalref.current.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style =
        "overflow: hidden";
    }
  }, [lokbol, modalref.current]);
  const lokModel = (e) => {
    setLokbol(true);
  };
  const hide = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    modalref.current.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style =
      "";
    setLokbol(false);
  };
  return (
    <>
      <div style={{ padding: "10px" }} onClick={() => lokModel(Props.color)}>
        <img className="img-fuild img-hovera" src={Props.imgurl} />
        {lokbol ? (
          <MyModel ref={modalref} tohide={hide} color={Props.color}>
            {
              <>
                <h3>{title}</h3>
                <span style={{ padding: "10px" }}>{description}</span>
                <Row
                  style={{
                    position: "relative",
                    width: "100%",
                    padding: "10px",
                  }}
                >
                  <Col xs={{ span: 12 }} md={{ span: 5 }}>
                    <img className="img-fuild" src={img_path} />
                  </Col>
                  <Col xs={{ span: 12 }} md={{ span: 7 }}>
                    <iframe
                      height="300"
                      width="100%"
                      src={video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Col>
                </Row>
              </>
            }
          </MyModel>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
