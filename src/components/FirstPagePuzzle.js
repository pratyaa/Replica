import {Container,Row,Col,Button} from 'react-bootstrap'
import './static/secondPage.css'
import React from 'react';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import Modal from 'react-bootstrap/Modal'

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
                  <h4>Your answer seems reasonable</h4>
                  <h4>Find out if you are right !</h4>
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


const First=()=>
{ const imgsrc=["https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png","https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png","https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png"]
 const [modalShow, setModalShow] = React.useState(false);    

return(
        <Container>
                <p className="py-3">
                Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:
                </p>
                <ul className="pb-5">
                    <li>Joseph is not the youngest.</li>
                    <li>Kevin is the oldest.</li>
                    <li>Nicholas is not the oldest.</li>
                </ul>

                {/* place where we drop */}
                
                
                            <Row >
                            <Col>
                                <div style={{width:"150px" ,height:"150px",border:"1px dotted black"}}>
    
                                </div>
                            </Col>
                            <Col>
                                <div style={{width:"150px" ,height:"150px",border:"1px dotted black"}}>
    
                                </div>
                            </Col>
                            <Col>
                                <div style={{width:"150px" ,height:"150px",border:"1px dotted black"}}>
    
                                </div>
                            </Col>
    
                        </Row> 
                           
                    
                            
              
                
                
                {/* Draggable images */}
               
                
                    
                   
                <Row >
                                {
                                    imgsrc.map((imgg)=>{
                                       
                                        console.log(imgg)
                                            
                                                return(
                                                    
                                                    <Col>
                                                    
                                                    <img style={{width:"150px",height:"150px"}} src={imgg}/>
                                                </Col>
                                                )
                                        
                                       
                                    })
                                }
                                {/* {
                                    imgsrc.map((imgg)=>{
                                        <Draggable key="1"draggableId="id">
                                        {
                                            (provided)=>
                                            (
                                                <Col {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    
                                                    <img style={{width:"150px",height:"150px"}} src={imgg}/>
                                                </Col>
                                            )
                                        }
                                        
                                        </Draggable>
                                    })    
                                } */}
                </Row>

               


                <Row className="py-5">
                    <Col className="mx-5">
                    <Button className="px-4"variant="outline-primary" onClick={() => setModalShow(true)}>
                        Show Explanation
                    </Button>
                    </Col>
                    <Col>
                    <Button className="px-5" onClick={() => setModalShow(true)}>
                        Check Answer
                    </Button>
                    </Col>
                    <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                </Row>

                
        </Container>
    )
}
export default First