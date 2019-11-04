import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container
  } from 'reactstrap';
  import Sitebar from '../home/Navbar';
  // import Auth from './auth/Auth';


//will need to pass props to get functionality from app? 
// see if the page can be linked from the read more buttons- using route and link

const MangaView = () => {
  return (
    <div className="App">
      <Sitebar/>


        <Col md={12}>
      <Card>
        <CardImg top width="100%" src="http://images6.fanpop.com/image/photos/42600000/berserk-guts-berserk-the-anime-manga-42694808-1000-580.jpg" alt="Berserk" />
        <CardBody>
          <CardTitle><h5>Berserk</h5></CardTitle>
          <CardText>Genre - Tags</CardText>
          <Button color="primary">Read More</Button>
        </CardBody>
      </Card>
    </Col>
    </div>
  );
  }
// will take the get request in the turn and will map out information from the database for the view.

export default MangaView;