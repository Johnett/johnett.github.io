import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import DevAnimation from './DevAnimation';
import AndroidAnimation from './AndroidAnimation';
import FlutterAnimation from './FlutterAnimation';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">I'm<strong className="main-name"> Johnett Mathew</strong>
              </h1>

              <div style={{ paddingLeft: 44, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{
                paddingBottom: 20,
                display: 'flex',
                justifyContent: 'center', // horizontal centering
                alignItems: 'center',     // vertical centering
              }}
            >
              <DevAnimation />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
