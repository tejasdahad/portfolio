import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import pdf from '../../Assets/Tejas Dahad Resume.pdf';

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
              title='DATA SCIENCE INTERN [TECHMAHINDRA]'
              date='July 2021 - September 2020'
              content={[
                'Teamed with 2 people and worked on data management audit.',
                'Designed 2 dashboard for summarization of databases, users, transaction average and revenue year wise.',
                ' Included 2-3 visualization graphs for revenue on dashboard',
              ]}
            />
            <Resumecontent
              title='FULL STACK WEB DEVELOPER [MISSIONED]'
              date='March 2020 - July 2020'
              content={[
                'Worked in a team of 10 members implemented online education platform named MISSIONED',
                ' Added a few core features like payment gateway integration, student teacher one-to-one interaction and firebase authentication',
              ]}
            />
            <h3 className='resume-title'>Extracurricular Activities</h3>
            <Resumecontent
              title='Team Member [Credenz-2019 (WALLSTREET) Technical Fest of PICT PUNE]'
              content={[
                'Worked as developer, tester and manager for virtual stock market during the event.',
              ]}
            />
            <Resumecontent
              title='Team Member [Pictoreal (Editing Team)  Cultural Club of PICT PUNE]'
              content={[
                'Edited articles for annual magazine event',
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <Resumecontent
              title='Computer Science Engineering [PICT, PUNE] '
              date='2018 - Present'
              content={[`CGPA: 9.72 (Till 6th Sem)`]}
            />
            <Resumecontent
              title='12TH BOARD [Deogiri Junior College, Aurangabad]'
              date='2016 - 2018'
              content={['Precentage: 90.92%']}
            />
            <Resumecontent
              title='10TH BOARD [Rustomjie International School, Jalgaon] '
              date='2004 - 2016'
              content={['Precentage: 98%']}
            />
            <h3 className='resume-title'>Ranks and Achivements</h3>
            <Resumecontent
              title=''
              content={[
                `Winners of Manipal TechTatva - a national level hackathon comprising 6 domains conducted by
                Manipal Institute of Technology with 800+ participants.
                `,
                'Ranked among top 10 teams in Pascathon at Pune Institute of Computer Technology with 100+ teams'
              ]}
            />
            <h3 className='resume-title'>Social Work</h3>
            <Resumecontent
              title=''
              content={[
                `Developed site for doctor to practice 
                online and help patients in times of covid19. Doctor successfully treated more than 
                40 patients online
                `,
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
