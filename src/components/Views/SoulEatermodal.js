import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewModal from '../reviews/reviewmodal';
import Example from './mangaimgcarousel';
import './mangamodal.css';
import ReviewCollapse from './mangareviewcollapse';
import WriteReviewCollapse from '../Views/writereviewcollapse';
import SoulEaterCarousel from './SoulEatercarousel';
import SoulEaterReviewCollapse from '../reviewtables/SoulEaterCollapse';
import ReviewModalSoulEater from '../SoulEaterManga/reviewmodalSoulEater';

const SoulEaterModal = (props) => {
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
        <ModalHeader toggle={toggle}><h1>Soul Eater</h1></ModalHeader>
        <ModalBody>
        <Col md={12}>
      <Card>
      <SoulEaterCarousel style={{
            height: '15em',
            width: 'auto'
        }} />
        {/* <CardImg top width="100%" src="https://www.rightstufanime.com/images/productImages/9781591164050_manga-Neon-Genesis-Evangelion-7-sample3.jpg" alt="Berserk" /> */}
        <CardBody>
          {/* <CardTitle><h5>Berserk</h5></CardTitle> */}
          <CardText><h3>Background</h3></CardText>
          <CardText>Death City is home to the famous Death Weapon Meister Academy, a technical academy headed by the Shinigami—Lord Death himself. Its mission: to raise "Death Scythes" for the Shinigami to wield against the many evils of their fantastical world. These Death Scythes, however, are not made from physical weapons; rather, they are born from human hybrids who have the ability to transform their bodies into Demon Weapons, and only after they have consumed the souls of 99 evil beings and one witch's soul.
<br></br>
<br></br>
Soul Eater Evans, a Demon Scythe who only seems to care about what's cool, aims to become a Death Scythe with the help of his straight-laced wielder, or meister, Maka Albarn. The contrasting duo work and study alongside the hot headed Black☆Star and his caring weapon Tsubaki, as well as the Shinigami's own son, Death the Kid, an obsessive-compulsive dual wielder of twin pistols Patty and Liz.
<br></br>
<br></br>
Soul Eater follows these students of Shibusen as they take on missions to collect souls and protect the city from the world's threats while working together under the snickering sun to become sounder in mind, body, and soul.</CardText>
          {/* <ReviewModal token={props.token}/>
          <Button color="primary">Reviews</Button>
          <Button color="secondary" onClick={toggle}>Close</Button> */}
        </CardBody>
      </Card>
    </Col>
    <Col>
    <SoulEaterReviewCollapse/>
    {localStorage.getItem('token') ? <ReviewModalSoulEater token={props.token}/> : <Button style={{
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

export default SoulEaterModal;