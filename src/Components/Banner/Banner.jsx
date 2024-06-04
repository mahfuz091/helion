import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import background_image from "../../app/assets/images/banner-img.png";
import b_chart from "../../app/assets/images/B.png";

const Banner = () => {
  return (
    <div className='banner'>
      <Container>
        <Row>
          <Col xs={12} lg={7}>
            <div className='banner_content'>
              <h1>
                The <span>Solution</span> for Automated DeFi Yield Strategies{" "}
                <span>
                  <img src={b_chart.src} alt='' />
                </span>
              </h1>
              <p>Empowering Your DeFi Yield Automation</p>
              <button className='thm_btn talk_btn'>
                <a href=''>Talk to Us</a>
              </button>
            </div>
          </Col>
          <Col xs={12} lg={5} className='position-relative'>
            <img
              className='banner_image top-left'
              src={background_image.src}
              alt=''
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
