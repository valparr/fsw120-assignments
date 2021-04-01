import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootsrap/dist/css/bootstrap.min.css'

function SuperHero(props) {
    return (
        <div>
            <br />
            <Container fluId>
                <Row>
                    <Col></Col>
                    <Col xs={1} className="cell"><img style={{height:"150px"}} src={props.imageName} onClick={() => alert(props.catchPhrase)} /></Col>
                    <Col className="cell" style={{backgroundColor:props.bgcolor, borderRadius:"50px"}} onClick={() => alert(props.catchPhrase)}>
                        <p style={{fontSize:"40px", fontWeight:"900", color:props.color}}>{props.name}</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SuperHero;