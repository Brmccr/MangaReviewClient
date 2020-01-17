import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewModal from '../reviews/reviewmodal';
import Example from './mangaimgcarousel';
import './mangamodal.css';
import ReviewCollapse from './mangareviewcollapse';
import WriteReviewCollapse from '../Views/writereviewcollapse';
import MadeInAbyssCarousel from './MadeInAbysscarousel';
import MadeInAbyssReviewCollapse from '../reviewtables/MadeInAbyssCollapse';
import ReviewModalMadeInAbyss from '../MadeInAbyssManga/reviewmodalMadeInAbyss';

const MadeInAbyssModal = (props) => {
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
        <ModalHeader toggle={toggle}><h1>Made In Abyss</h1></ModalHeader>
        <ModalBody>
        <Col md={12}>
      <Card>
      <MadeInAbyssCarousel style={{
            height: '15em',
            width: 'auto'
        }} />
        {/* <CardImg top width="100%" src="https://www.rightstufanime.com/images/productImages/9781591164050_manga-Neon-Genesis-Evangelion-7-sample3.jpg" alt="Berserk" /> */}
        <CardBody>
          {/* <CardTitle><h5>Berserk</h5></CardTitle> */}
          <CardText><h3>Background</h3></CardText>
          <CardText>The Abyss—a gaping chasm stretching down into the depths of the earth, filled with mysterious creatures and relics from a time long past. How did it come to be? What lies at the bottom? Countless brave individuals, known as Divers, have sought to solve these mysteries of the Abyss, fearlessly descending into its darkest realms. The best and bravest of the Divers, the White Whistles, are hailed as legends by those who remain on the surface.
<br></br>
<br></br>
Riko, daughter of the missing White Whistle Lyza the Annihilator, aspires to become like her mother and explore the furthest reaches of the Abyss. However, just a novice Red Whistle herself, she is only permitted to roam its most upper layer. Even so, Riko has a chance encounter with a mysterious robot with the appearance of an ordinary young boy. She comes to name him Reg, and he has no recollection of the events preceding his discovery. Certain that the technology to create Reg must come from deep within the Abyss, the two decide to venture forth into the chasm to recover his memories and see the bottom of the great pit with their own eyes. However, they know not of the harsh reality that is the true existence of the Abyss.</CardText>
          {/* <ReviewModal token={props.token}/>
          <Button color="primary">Reviews</Button>
          <Button color="secondary" onClick={toggle}>Close</Button> */}
        </CardBody>
      </Card>
    </Col>
    <Col>
    <MadeInAbyssReviewCollapse/>
    {localStorage.getItem('token') ? <ReviewModalMadeInAbyss token={props.token}/> : <Button style={{
      marginBottom: '-.2em',
      marginTop : '.2em'
    }}color="primary" size="lg" block>SignIn Needed To Post A Review</Button> }
        {/* <ReviewModal token={props.token}/> */}
        <Button color="primary" onClick={toggle} size="lg" block>Close</Button></Col>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MadeInAbyssModal;