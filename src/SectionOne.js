import React from 'react'
import {Button, Row, Col, Container, Jumbotron} from 'react-bootstrap'


function SectionOne() {
    return (
        <div data-bs-parallax-bg="true" id="parallax" style={{backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
        <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" id="cont" style={{backgroundColor:"rgba(45,45,45,0.68)", marginTop:"63px"}}>
            <div class="row justify-content-center align-items-center align-content-center align-self-center" style={{height:"433px"}}>
                <Col>
                  <form>
                    <h4 style={{color:"white"}}>Where are you searching?</h4>
                    <div class="input-group">
                      <select class="custom-select" id="inputGroupSelect04">
                        <option selected>Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="margo">
                        <h4 style={{color:"white"}}>What type of property are you searching for?</h4>
                    <div class="input-group">
                      <select class="custom-select" id="inputGroupSelect04">
                        <option selected>Type of Unit</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    </div>
                    <div class="margo">
                        <h4 style={{color:"white"}}>What's your budget?</h4>
                    <div class="input-group">
                      <select class="custom-select" id="inputGroupSelect04">
                        <option selected>Budget</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    </div>
                  </form>
                </Col>
            </div>
            <button class="btn btn-primary d-flex mx-auto" type="button" id="search-Button">Search</button>
        </div>
        <Jumbotron data-aos="fade-up" data-aos-duration="1000" id="jumbo" style={{color:"rgb(255,255,255)"}}>
            <h1 data-aos="fade-up" data-aos-duration="1000" id="jumbex">Let's find you a home !</h1>
        </Jumbotron>
        <div style={{backgroundImage: 'url(' + '/assets/img/lynnestair-exterior-hudsonvalley-veranda-jpg-1565722565.jpg'+')',
        backgroundSize: "cover", backgroundPosition: "center center", position: "absolute", height: "200%", width: "100%", top: "0px", left: "0px", zIndex: "-100", transform: "translate3d(0px, -25.7289%, 0px)"}}></div>
    </div>
    )
}

export default SectionOne
