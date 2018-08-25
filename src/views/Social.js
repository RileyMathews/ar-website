import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import './Social.css'
import $ from 'jquery'


class Social extends Component {

    state = {
        script: "<script type=\"text/javascript\">window.PixleeAsyncInit = function() {Pixlee.init({apiKey:'7AWgWFcxN9VcM4QDOG2'});Pixlee.addSimpleWidget({widgetId:'7876'});};</script>"
    }

    componentDidMount() {
        const element = $('body')
        element.append(`
        <script type="text/javascript">window.PixleeAsyncInit = function() {Pixlee.init({apiKey:'7AWgWFcxN9VcM4QDOG2'});Pixlee.addSimpleWidget({widgetId:'7876'});};</script><script src="//instafeed.assets.pixlee.com/assets/pixlee_widget_1_0_0.js"></script>
        `)
    }

    render() {
        return (
            <Hero isColor='dark' isSize='medium'>
                <HeroBody id="social">
                    <Container className='has-text-centered'>
                        <Title>
                            Social
                        </Title>
                        <div id="pixlee_container"/>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Social
