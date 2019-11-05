import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Auth from './Auth';
import Login from './Login';

const AuthModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>{buttonLabel}SignIn/SignUp</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
        <ModalBody>
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup toggle={toggle} updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login toggle={toggle} updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AuthModal;