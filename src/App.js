import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingMiddle from './components/Landingpage-middle'
import {IntroComponent,RationalComponent,PuzzleComponent} from './components/TopicsAndDescription'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import NavbarComponent from './components/Navbar'

function App() {
  return (
    
    <Container fluid className="px-0">
      <NavbarComponent/>
      <LandingMiddle/>
      <IntroComponent/>
      <RationalComponent/>
      <PuzzleComponent/>
    </Container>
  );
}

export default App;
