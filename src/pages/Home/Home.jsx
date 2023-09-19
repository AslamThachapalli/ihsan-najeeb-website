import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About";
import Timeline from "../../components/Timeline/Timeline";
import homeConfig from "../../config/homeConfig";
import ihsanPic from "../../assets/ihsan-crop-pic.jpg";

import "./Home.css";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-content" id="home">
        <Row>
          <Col className="home-header">
            <div className="row">
              <div className="col-sm-6 d-sm-flex justify-content-center d-none ">
                <img src={ihsanPic} alt="" />
              </div>

              <div className="col-sm-6 align-self-sm-center d-flex flex-column justify-content-center greeting-height">
                <div style={{ textAlign: "center" }}>{homeConfig.greeting}</div>
                <div style={{ textAlign: "center" }}>
                  <DynamicTyping titles={homeConfig.titles} />
                </div>
              </div>
            </div>
          </Col>
          <div className="mt-4 mt-sm-0">
            <About about={homeConfig.about} />
          </div>
        </Row>
      </Container>
      <Container fluid className="resume-content" id="resume">
        <div className="col-md-8 mx-auto">
          <Timeline items={homeConfig.workTimeline} />
        </div>
      </Container>
    </section>
  );
};

export default Home;
