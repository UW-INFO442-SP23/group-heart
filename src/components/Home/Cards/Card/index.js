//Gloria
import React, { useEffect, useRef } from "react";
import { MyModel } from "../../../Common/MyModel";
import { Row, Col } from "react-bootstrap";
export const Card = (Props) => {
  const [lokbol, setLokbol] = React.useState(false);
  const [lokbol_a, setLokbol_a] = React.useState(false);
  const [state, setState] = React.useState(false);
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
    setState(true);
  };
  const setIsHovered = (e) => {
    if (state) {
      setLokbol_a(true);
    } else {
      if (e == 0) {
        setLokbol_a(true);
      } else {
        setLokbol_a(false);
      }
    }
  };
  const hide = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    modalref.current.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style =
      "";
    setLokbol(false);
  };
  const hide_a = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    modalref.current.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style =
      "";
    setLokbol(false);
  };
  return (
    <>
      <div
        style={{ padding: "10px" }}
        onClick={() => lokModel(Props.color)}
        onMouseEnter={() => setIsHovered(0)}
        onMouseLeave={() => setIsHovered(1)}
      >
        <img
          className="img-fuild img-hovera"
          src={lokbol_a ? Props.imgurl : Props.imgurl_a}
        />
        {lokbol ? (
          <MyModel ref={modalref} tohide={hide} color={Props.color}>
            {
              <>
                <br />
                <h3>{title}</h3>
                <span style={{ padding: "10px" }}>{description}</span>
                <Row
                  style={{
                    position: "relative",
                    width: "100%",
                    padding: "10px",
                  }}
                >
                  <Col xs={{ span: 12 }} md={{ span: 12 }}>
                    <iframe
                      height="300"
                      width="100%"
                      src={video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Col>
                  <Col
                    xs={{ span: 12 }}
                    style={{
                      textAlign: "center",
                      color: Props.color,
                      marginTop: "10px",
                    }}
                  >
                    <span
                      className="modal-btn"
                      onClick={hide_a}
                      style={{ border: `1px solid ${Props.color}` }}
                    >
                      I like this!😄
                    </span>
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
