import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const TeamMember = ({ imgSrc, name, title, description, email }) => (
  <Col>
    <Card>
      <Card.Img variant="top" src={imgSrc} alt={name} />
   
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{email}</Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
  </Col>
);

const AboutPage = () => (
  <Container className="about-section">
    <h1>About Us Page</h1>
    <p>"Introducing our exceptional team – a synergy of diverse talents and skills. Committed to excellence, we blend creativity, innovation, and expertise. Together, we embark on a journey to achieve and exceed expectations, bringing visions to reality."</p>

    <h2 style={{ textAlign: 'center' }}>Our Team</h2>

    <Row>
      <TeamMember
        imgSrc='/image/team1.jpg'
        name="Ram Gawali"
        title="PNR:-230940320087"
        description="Akola"
        email="ramgawali45@gmail.com"
      />

      <TeamMember
        imgSrc='/image/team2.jpg'
        name="Runal Pawar"
        title="PNR:-230940320091"
        description="Nagpur"
        email="runalpawar10.rp@gmail.com"
      />

      <TeamMember
        imgSrc='/image/team3.jpg'
        name="Yash Vanare"
        title="PNR:-230940520101"
        description="Sangli"
        email="yashvanare@gmail.com"
      />
    </Row>
  </Container>
);

export default AboutPage;
