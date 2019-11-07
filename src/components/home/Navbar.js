import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
// import AuthModal from '../auth/authmodal';
import ProfileModal from '../Views/profileviewmodal';
import ReviewModal from '../reviews/reviewmodal';
// import AuthModal from '../auth/authmodal';
import AuthModal from '.././auth/authmodal';
import InstuctionsModal from '../Views/instructionsmodal';

const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
}

    return(
        <Navbar color ="faded" light expand="md">
            <NavbarBrand href="/"><h3 style={{
                color:'blue'
            }}>MangaBase</h3></NavbarBrand>
            <NavbarToggler style={{
                color: 'black',
                backgroundColor: 'white'
            }}onClick={toggle}/>
            <Collapse style={{
                color: 'white'
            }}isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem style={{
                        display: 'flex',
                        position: 'relative'
                    }}>
                        {/* <AuthModal updateToken={updateToken}/> */}
                        {/* {protectedViews()} */}
                        {/* <InstuctionsModal/> */}
                        {localStorage.getItem('token') ? <ProfileModal token={props.token}/> : <></> }
                        {!localStorage.getItem('token') ? <AuthModal updateToken={props.updateToken}/> : <></> }
                        {localStorage.getItem('token') ? <Button onClick={props.clearToken} outline color="primary">Logout</Button> : <></> }
                    </NavItem>
    
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;