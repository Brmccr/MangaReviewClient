import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
// import APIURL for each fetch in project will import for helps environment file - 

const Auth = (props) => {

    const [isAuthOpen, setIsAuthOpen] = useState(false);

const toggleAuth = () => {
    let newIsAuthOpen = !isAuthOpen;
    setIsAuthOpen(newIsAuthOpen);
}

    return(
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup toggle={toggleAuth} updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login toggle={toggleAuth} updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;