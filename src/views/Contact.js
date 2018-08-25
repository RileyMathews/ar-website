import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import './Contact.css'


class Contact extends Component {


    render() {
        return (
            <Hero isColor='light' isSize='medium' id='banner__contact'>
                <HeroBody className="banner">
                    <Container className='has-text-centered'>
                        <Title hasTextColor="white" isSize={2}>
                            Contact
                        </Title>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Contact
