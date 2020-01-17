import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewModal from '../reviews/reviewmodal';
import Example from './mangaimgcarousel';
import './mangamodal.css';
import NGECarousel from './NGEcarousel';
import NGEReviewCollapse from '../reviewtables/NGECollapse';
import ReviewModalNGE from '../NGEManga/reviewmodalNGE';
import ReviewCollapse from './mangareviewcollapse';
import WriteReviewCollapse from '../Views/writereviewcollapse';

const NGEModal = (props) => {
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
        <ModalHeader toggle={toggle}><h1>Neon Genesis Evangelion</h1></ModalHeader>
        <ModalBody>
        <Col md={12}>
      <Card>
      <NGECarousel style={{
            height: '15em',
            width: 'auto'
        }} />
        {/* <CardImg top width="100%" src="https://www.rightstufanime.com/images/productImages/9781591164050_manga-Neon-Genesis-Evangelion-7-sample3.jpg" alt="Berserk" /> */}
        <CardBody>
          {/* <CardTitle><h5>Berserk</h5></CardTitle> */}
          <CardText><h3>Background</h3></CardText>
          <CardText>In 1999, a meteorite crashed into Antarctica. The impact melted the continental ice mass and drastically raised sea levels, damaging the world's climate and causing the deaths of over half its population. Now in 2015, devastating creatures of unknown origin—referred to as "Angels"—ravage what remains of the planet.
<br></br>
<br></br>
In the heavily fortified city of Tokyo-3, 14-year-old Shinji Ikari is destined to halt the Angels' onslaught. Recruited by his father's secret organization NERV, Shinji is enlisted as a pilot of an Evangelion, a massive bioorganic android created solely to defeat the Angels.
<br></br>
<br></br>
Suddenly with the weight of the world upon his shoulders, Shinji must find the courage and drive to stand up for the future—and himself. But as skirmishes between the Evangelions and Angels become recurrent, the horrifying truth of the world is slowly revealed.</CardText>
          {/* <ReviewModal token={props.token}/>
          <Button color="primary">Reviews</Button>
          <Button color="secondary" onClick={toggle}>Close</Button> */}
        </CardBody>
      </Card>
    </Col>
    <Col>
    <NGEReviewCollapse/>
    {localStorage.getItem('token') ? <ReviewModalNGE token={props.token}/> : <Button style={{
      marginBottom: '-.2em',
      marginTop : '.2em'
    }}color="primary" size="lg" block>SignIn Needed To Post A Review</Button> }
    {/* <ReviewModalNGE token={props.token}/> */}
        {/* <ReviewModal token={props.token}/> */}
        <Button color="primary" onClick={toggle} size="lg" block>Close</Button></Col>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NGEModal;