import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title, Image} from 'bloomer'
import './Banner.css'
import logo from '../images/logo.png'



class Banner extends Component {


    render() {
        return (
            <Hero isSize='medium' id='banner__main'>
                <HeroBody id="home">
                    <Container className='has-text-centered'>
                        {/* <Title hasTextColor="white" isSize={1}>
                            Alamanac Ridge
                        </Title> */}
                        {/* <img className="logo" src={logo} alt=""/> */}
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Banner
