import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

function Second() {
    return (
        <Container>
            <Row className="pb-5 mb-5">
                
                <img src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/TvY8JiPVvOPqN1nhUDFL6d-Course-Logic-Reillustrated-1571-95-OYBsYF.png?width=480"></img>
                
            </Row>
            <h2>Page 2</h2>
            <p>One of the women above is named Kaylee and the other is named Inara. They each make a statement about who they are as shown.

            We know that at least one of them is lying. What color is Inara's dress?</p>
        </Container>
    )
}
function Third() {
    return (
        <div style={{height:"700px"}}>
            <h2>Page 3</h2>
        </div>
    )
}
function Fourth() {
    return (
        <div style={{height:"700px"}}>
            <h2>Page 4</h2>
        </div>
    )
}
function Fifth() {
    return (
        <div style={{height:"700px"}}>
            <h2>Page 5</h2>
        </div>
    )
}
function Sixth() {
    return (
        <div style={{height:"700px"}}>
            <h2>Page 6</h2>
        </div>
    )
}
export {Second,Third,Fourth,Fifth,Sixth}
