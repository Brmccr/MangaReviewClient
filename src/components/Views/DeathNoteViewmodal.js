import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewModal from '../reviews/reviewmodal';
import Example from './mangaimgcarousel';
import './mangamodal.css';
import DeathNotecarousel from './DeathNotecarousel';
import ReviewCollapse from './mangareviewcollapse';
import WriteReviewCollapse from '../Views/writereviewcollapse';
import DeathNoteReviewCollapse from '../reviewtables/DeathNoteCollapse';
import ReviewModalDeathNote from '../DeathNoteManga/reviewmodalNGE';

const DeathNoteModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>{buttonLabel}Read More</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><h1>Death Note</h1></ModalHeader>
        <ModalBody>
        <Col md={12}>
      <Card>
      <DeathNotecarousel style={{
            height: '15em',
            width: 'auto'
        }} />
        {/* <CardImg top width="100%" src="https://www.rightstufanime.com/images/productImages/9781591164050_manga-Neon-Genesis-Evangelion-7-sample3.jpg" alt="Berserk" /> */}
        <CardBody>
          {/* <CardTitle><h5>Berserk</h5></CardTitle> */}
          <CardText><h3>Background</h3></CardText>
          <CardText>A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm.
<br></br>
<br></br>
High school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be.
<br></br>
<br></br>
With this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L.</CardText>
          {/* <ReviewModal token={props.token}/>
          <Button color="primary">Reviews</Button>
          <Button color="secondary" onClick={toggle}>Close</Button> */}
        </CardBody>
      </Card>
    </Col>
    <Col>
    <DeathNoteReviewCollapse/>
    {localStorage.getItem('token') ? <ReviewModalDeathNote token={props.token}/> : <Button color="primary" size="lg" block>SignIn Needed To Post A Review</Button> }
        {/* <ReviewModal token={props.token}/> */}
        <Button color="primary" onClick={toggle} size="lg" block>Close</Button></Col>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeathNoteModal;