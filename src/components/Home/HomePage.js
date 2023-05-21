import React from 'react';
import { Navbar } from '../Common/Navbar';
import { Footer } from '../Common/Footer'
import Carousel from 'react-bootstrap/Carousel'
import img from '../../img/logo.png'
import { Col, Row } from 'react-bootstrap';
import { Cards } from './Cards';
export function HomePage(props) {
    
    return (
        <div>
            <Navbar />
            <main>
            <CarouselList />
            <Cards />
            </main>
            <Footer />
        </div>
    )
}



const CarouselList =() =>{
    const CarouselListdata = [img,img,img]
    return (
        <>
            <Carousel className='m-3 Carsoulaaa' interval={null}>
                {CarouselListdata.map((i, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <section className="flex-item">
                                <Row>
                                    <Col md={5} sm={12} xs={12} className="d-flex">
                                <div className="f-t-r">
                                    <h2> Why Mentorship? </h2>
                                    <p>Seniors have abundant life experiences. Their advice and suggestions are valuable for
                                        younger generations
                                        to face challenges and difficulties in life. Building a bridge between seniors and the
                                        younger
                                        generation will inspire their motivation to help, learn, and grow together. The story
                                        below illustrates
                                        how senior mentorships are salient to be beneficial to the younger group. </p>
                                </div></Col>
                                    <Col md={7} sm={12} xs={12}>
                                <div className="f-t-l">
                                        <a href='https://youtu.be/qOp4Y2_g5ZI'><img src={i} className="img-fluid"></img>
                                        <img src={img} className='f-t-l-icon'></img>
                                        </a>
                                </div></Col>
                                </Row>
                            </section>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
}