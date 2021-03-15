import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Tejas Dahad </span>
            from <span className='purple'> Pune, India.</span>
            <br />I am a junior pursuing degree in Computer Science in PICT
            Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Playing Computer Games
            </li>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Trekking and
              Travelling
            </li>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Listening Music
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
