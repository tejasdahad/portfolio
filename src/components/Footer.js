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
          <h3>Designed and Developed by Karan Kangude</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} KK</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='https://github.com/Karan05122000'
                style={{ color: 'white' }}
              >
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://twitter.com/karan_kangude'
                style={{ color: 'white' }}
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/karan-kangude-220a0416b/'
                style={{ color: 'white' }}
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.instagram.com/kangude_karan/'
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
