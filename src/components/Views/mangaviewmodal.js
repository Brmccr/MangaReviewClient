import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewModal from '../reviews/reviewmodal';
import Example from './mangaimgcarousel';
import './mangamodal.css';
import CollapseExample from './mangareviewcollapse';
import ReviewCollapse from './mangareviewcollapse';
import WriteReviewCollapse from '../Views/writereviewcollapse';
import ReviewModalBerserk from '../BerserkManga/reviewmodalberserk';
import { relative } from 'path';
import AuthModal from '../auth/authmodal';

const MangaModal = (props) => {
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
        <ModalHeader toggle={toggle}><h1>Berserk</h1>
        </ModalHeader>
        <ModalBody>
        <Col md={12}>
      <Card>
      <Example style={{
            height: '15em',
            width: 'auto'
        }} />
        {/* <CardImg top width="100%" src="http://images6.fanpop.com/image/photos/42600000/berserk-guts-berserk-the-anime-manga-42694808-1000-580.jpg" alt="Berserk" /> */}
        <CardBody>
          {/* <CardTitle><h5>Berserk</h5></CardTitle> */}
          <CardText><h3>Background</h3></CardText>
          <CardText>Guts, a former mercenary now known as the "Black Swordsman," is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings.
<br></br>
<br></br>
Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity.</CardText>
        </CardBody>
      </Card>
    </Col>
    <Col>
    <ReviewCollapse/>
    {localStorage.getItem('token') ? <ReviewModalBerserk token={props.token}/> : <Button style={{
      marginBottom: '-.2em',
      marginTop : '.2em'
    }}
      color="primary" size="lg" block>SignIn Needed To Post A Review</Button> }
    {/* {localStorage.getItem('token') ? <ReviewModalBerserk token={props.token}/> : <AuthModal token={props.token}/> } */}
    {/* <ReviewModalBerserk token={props.token}/> */}
        {/* <ReviewModal token={props.token}/> */}
        <Button color="primary" onClick={toggle} size="lg" block>Close</Button>
          {/* <Button color="primary" onClick={toggle}>Close</Button>
          <Button color="primary" size="lg" block>Block level button</Button> */}
          </Col>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MangaModal;