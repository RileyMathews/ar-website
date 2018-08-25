import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import './Contact.css'


class Contact extends Component {


    render() {
        return (
            <Hero isColor='light' isSize='medium' id='banner__contact'>
                <HeroBody className="banner" id="contact">
                    <Container className='has-text-centered'>
                        <Title hasTextColor="white" isSize={2}>
                            Contact
                        </Title>
                        <p className="text-white">For booking and other inquiries, please email us at <a href="mailto:almanacridge@gmail.com" className="link">almanacridge@gmail.com</a>. Yes, we do play private events - Weddings, receptions, corporate parties, etc.</p>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Contact
