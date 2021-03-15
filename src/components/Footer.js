import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>Designed and Developed by Tejas Dahad</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='https://github.com/tejasdahad'
                style={{ color: 'white' }}
              >
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://twitter.com/tejas_dahad'
                style={{ color: 'white' }}
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/tejas-dahad-b2a492b3'
                style={{ color: 'white' }}
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.instagram.com/tejas_dahad/'
                style={{ color: 'white' }}
              >
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
