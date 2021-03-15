import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import pdf from '../../Assets/Resume.pdf';

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <i className='fas fa-download'>&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Experience</h3>
            <Resumecontent
              title='FULL STACK WEB DEVELOPER [WEBKNOT]'
              date='March 2020 - July 2020'
              content={[
                'Worked in a team of 5 members implemented grocery ordering portal named KIRANA',
                ' Added a few core features to the Horizon Application such as resume finder, subscription plans section and payment history.',
              ]}
            />
            <h3 className='resume-title'>Extracurricular Activities</h3>
            <Resumecontent
              title='Team Member [Credenz-2019 (WALLSTREET) Technical Fest of PICT PUNE]'
              content={[
                'Worked as developer, tester and manager for virtual stock market during the event.',
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <Resumecontent
              title='Computer Science Engineering [PICT, PUNE] '
              date='2019 - Present'
              content={[`CGPA: 9.6 (Till 4th Sem)`]}
            />
            <Resumecontent
              title='12TH BOARD [RR Shinde Jr College,PUNE]'
              date='2016 - 2018'
              content={['Precentage: 91.79%']}
            />
            <Resumecontent
              title='10TH BOARD [Sadhana English Medium School,PUNE] '
              date='2006 - 2016'
              content={['Precentage: 92.4%']}
            />
            <h3 className='resume-title'>Ranks and Achivements</h3>
            <Resumecontent
              title=''
              content={[
                `Winners of Manipal TechTatva - a national level hackathon comprising 6 domains conducted by
                Manipal Institute of Technology with 800+ participants.
                `,
                'Ranked among top 10 teams in Pascathon at Pune Institute of Computer Technology with 100+ teams',
                `Global Rank 56 in February Codechef Starter 2021`,
                'Most Improved Performer - Webknot Technologies',
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <i className='fas fa-download'>&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
