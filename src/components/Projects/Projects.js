import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import BlogCard from './BlogsCards';
import Particle from '../Particle';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import blocktrade from '../../Assets/Projects/blocktrade.jpg';
import cosmicom from '../../Assets/Projects/cosmicom.jpg';
import agro from '../../Assets/Projects/agro.jpg';
import dermosolutions from '../../Assets/Projects/dermosolutions.jpg';
import eeg from '../../Assets/Projects/eeg.gif';
import suicide from '../../Assets/Projects/suicide.png';
import algo from '../../Assets/Projects/algo.png';
import plant from '../../Assets/Projects/plant.jpeg';
import tele from '../../Assets/tele2.jpg';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={blocktrade}
              isBlog={false}
              title='BlockTrade'
              description='A blockchain-based project which sought to replace banks in
              conducting international trade.The platform handles document verification, approval, transaction and some part of the supply chain.Covers the entire legal aspect of the trade ensuring automation of the process, improved efficiency
              and enhanced security.'
              link='https://github.com/Block-Trade'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={dermosolutions}
              isBlog={false}
              title='DermoSolutions'
              description='Create the platform in 4 days which connects patients with
              dermatologists where doctors can treat patients online.An auto-generated report is sent to the patient which is downloaded on their local device. Uses machine learning algorithms to identify 6 skin diseases and common medications.'
              link='https://github.com/jayesh2020/Pasckathon_CodeLinguists'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={agro}
              isBlog={false}
              title='Laddha Agro Plast Industries'
              description='Devloped website for an agro based industry in Jaglaon named Laddha Agro Plast Industries.
              It contained automatic email responding, details of products and services provided by the company.
              '
              link='https://github.com/tejasdahad/laddhaagro-project'
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={tele}
              isBlog={false}
              title='Panacea Pedia Care Clinic'
              description='The platform facilitates teleconsultation in hard times of covid. It includes features such as appointment booking, prescription filing and generating patient history.'
              link='https://panaceapediacareclinicdrpayal.web.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
