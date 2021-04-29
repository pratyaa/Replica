import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import {Container,Row,Col,Button} from 'react-bootstrap'
import './static/card.css'

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body className="py-0 my-0 px-0 mx-0 " >
         <Container fluid>
            <Row >
              <Col className="px-4" style={{backgroundColor:"black"}}>
              </Col>
              <Col >
                <Row className="justify-content-md-center py-4 my-4">
                  <h3>Excel in Math and Science</h3>
                </Row>
                <Row  className="justify-content-md-center px-4 " style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
                  <Button variant="primary" className="my-2"> Join Using Facebook</Button>
                  <Button variant="danger" className="my-2"> Join Using Google</Button>
                  <Button variant="secondary" className="my-2"> Join Using Email</Button>
                </Row>
                <Row className="justify-content-md-center pt-5 pd-3 mt-5">
                  <p>Existing User <a href="#">Log In</a></p>
                </Row>
              </Col>
            </Row>
        </Container>
        </Modal.Body>
       
      </Modal>
    );
  }

const ExpandableCardComponent=(props)=>
  {
    const [modalShow, setModalShow] = React.useState(false);
    return(
      <>
        <Card className="mx-2 px-2 my-3 myCard" style={{maxWidth:"275px"}} onClick={() => setModalShow(true)} >
            <CardImg top width="80%" src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">Warm Up Puzzles</CardTitle>  
            <CardText className="text-muted pt-0 mt-0">Get Started.</CardText>
            <Button className="expandableButton mb-0 pb-0" onClick={()=>props.updateState()}>^</Button>
            </CardBody>
        </Card>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
      </>
    )
  }
  export default ExpandableCardComponent

  // style={{minWidth:"220px",maxWidth:"300px"}}