import FirstPage from './components/FirstPage'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import NavbarComponent from './components/Navbar'
import SecondPage from "./components/SecondPageLayout"

function App() {
  return (
    <Container fluid className="px-0">
    <NavbarComponent/>
      <FirstPage/>

      {/* Uncomment the following to view second page */}
      {/* <SecondPage/> */}
    </Container>
    
  );
}

export default App;
