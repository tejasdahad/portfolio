import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/profile-photo.png';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tilt from 'react-parallax-tilt';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className='purple'> C, C++ and Javascript. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className='purple'>Data Science</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className='purple'> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/Karan05122000'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/karan_kangude'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/karan-kangude-220a0416b/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/kangude_karan/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;