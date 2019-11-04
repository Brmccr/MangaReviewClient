import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container,
} from 'reactstrap';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import Sitebar from './components/home/Navbar';
import Auth from './auth/Auth';
import MangaView from './components/Views/mangaview';
import AuthModal from './auth/authmodal';
import MangaModal from './components/Views/mangaviewmodal';
import ProfileModal from './components/Views/profileviewmodal';
import ReviewIndex from './components/reviews/reviewindex';
import ReviewModal from './components/reviews/reviewmodal';
import Example from './components/Views/mangaimgcarousel';
import NGEModal from './components/Views/NGEViewmodal';
import CollapseExample from './components/Views/mangareviewcollapse';
import DeathNoteModal from './components/Views/DeathNoteViewmodal';
import MadeInAbyssModal from './components/Views/MadeInAbyssmodal';
import SoulEaterModal from './components/Views/SoulEatermodal';
import MangaReviewTable from './components/onemangareviewmapper/reviewmapper';
import DeadmanWonderlandModal from './components/Views/DeadmanWonderlandmodal';

// function App() {

const App = (props) => {

  const [sessionToken, setSessionToken] = useState('');

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

useEffect (() => {
  if(localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

  return (
    <div className="App">
      <Sitebar token={sessionToken} clearToken={clearToken} updateToken={updateToken}/>
      {/* <Auth updateToken={updateToken}/> */}
      {/* <AuthModal updateToken={updateToken}/> */}
      {/* <ProfileModal token={sessionToken}/> */}
      {/* <ReviewModal token={sessionToken}/> */}
      {/* <CollapseExample/> */}
      {/* <MangaReviewTable/> */}
      <Container>
      <Row>
      {/* <ReviewIndex token={sessionToken}/> */}

        <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }} src="https://i.redd.it/cu0uoae082111.png" alt="Berserk" />
        <CardBody>
          <CardTitle><h5>Berserk</h5></CardTitle>
          <CardText>Genres: Action, Adventure, Fantasy, Supernatural,Psychological</CardText>
          <MangaModal token={sessionToken}/>
        </CardBody>
      </Card>
    </Col>

    <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }} src="https://cdn.vox-cdn.com/thumbor/SYiIF-623aJEsMLH5ceEnGWWQXw=/0x0:1280x1205/1200x800/filters:focal(514x213:718x417)/cdn.vox-cdn.com/uploads/chorus_image/image/64060202/tumblr_nzss2qZIyT1suxi1yo1_1280.0.jpg" alt="NGE" />
        <CardBody>
          <CardTitle><h5>Neon Genesis Evangelion</h5></CardTitle>
          <CardText>Action, Mystery, Drama, Mecha, Sci-Fi, Shounen, Psychological</CardText>
          <NGEModal token={sessionToken}/>
        </CardBody>
      </Card>
    </Col>

    <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }} src="https://i0.wp.com/aforanime.com/wp-content/uploads/2017/04/19003895236_fa50f4e6ba_o.jpg?fit=1920%2C1080&ssl=1" alt="Death Note" />
        <CardBody>
          <CardTitle><h5>Death Note</h5></CardTitle>
          <CardText>Mystery, Police, Psychological, Supernatural, Thriller, Shounen</CardText>
          <DeathNoteModal token={sessionToken}/>
        </CardBody>
      </Card>
    </Col>


    <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }} src="https://images7.alphacoders.com/860/thumb-1920-860635.jpg" alt="Liar Game" />
        <CardBody>
          <CardTitle><h5>Made In Abyss</h5></CardTitle>
          <CardText>Action, Adventure, Drama, Fantasy, Sci-Fi</CardText>
          <MadeInAbyssModal token={sessionToken}/>
        </CardBody>
      </Card>
    </Col>
    
    <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }}  src="https://wallpaperplay.com/walls/full/9/0/5/274004.jpg" alt="Berserk" />
        <CardBody>
          <CardTitle><h5>Soul Eater</h5></CardTitle>
          <CardText>Action, Fantasy, Shounen, Supernatural</CardText>
          <SoulEaterModal token={sessionToken}/>
        </CardBody>
      </Card>
    </Col>
    
    <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }} src="https://cdn.myanimelist.net/images/manga/3/192659l.jpg" alt="Berserk" />
        <CardBody>
          <CardTitle><h5>Deadman Wonderland</h5></CardTitle>
          <CardText>Action, Adventure, Sci-Fi, Supernatural</CardText>
          <DeadmanWonderlandModal token={sessionToken}/>
        </CardBody>
      </Card>
    </Col>
    
    {/* <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }} src="https://images5.alphacoders.com/508/thumb-1920-508247.jpg" alt="Berserk" />
        <CardBody>
          <CardTitle><h5>Attack On Titan</h5></CardTitle>
          <CardText>Action, Mystery, Drama, Fantasy, Horror, Supernatural</CardText>
          <MangaModal token={sessionToken}/>
        </CardBody>
      </Card>
    </Col>

    <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }}  src="http://images6.fanpop.com/image/photos/33400000/nausicaa-nausicaa-of-the-valley-of-the-wind-33442134-1680-1050.jpg" alt="Berserk" />
        <CardBody>
          <CardTitle><h5>Nausicaä of the Valley of the Wind</h5></CardTitle>
          <CardText>Action, Adventure, Fantasy, Supernatural</CardText>
          <MangaModal token={sessionToken}/>
        </CardBody>
      </Card>
    </Col>

    <Col md={4}>
      <Card className="appcard">
        <CardImg style={{
            height: '15em',
            width: 'auto'
        }}  src="http://images6.fanpop.com/image/photos/42600000/berserk-guts-berserk-the-anime-manga-42694808-1000-580.jpg" alt="Berserk" />
        <CardBody>
          <CardTitle><h5>Berserk</h5></CardTitle>
          <CardText>Genre - Tags</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </Col> */}
    
    </Row>
    </Container>

    </div>
  );
}

export default App;
