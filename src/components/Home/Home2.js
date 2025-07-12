import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile_round.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my passion for programming early on and have been learning and growing ever since… making steady progress along the way! 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> Java, Kotlin, and Dart. </b>
              </i>
              <br />
              <br />
              My field of interest is architecting and building new&nbsp;
              <i>
                <b className="purple">mobile applications</b>.
              </i>
              <br />
              <br />
              I enjoy turning ideas into fully functional apps using&nbsp;
              <b className="purple">Android</b> and cross-platform frameworks like&nbsp;
              <i>
                <b className="purple">Flutter.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex justify-content-center align-items-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Johnett"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/johnettmathew/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
