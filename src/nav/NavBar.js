import React, { Component } from 'react'
import { Navbar, NavbarItem, NavbarBurger, NavbarBrand, NavbarMenu, NavbarEnd } from "bloomer";
import './NavBar.css'
import brand from '../images/logo.png'


/* 
    module to handle displaying and logic of using the navigation bar
    authors Riley Mathews
*/
class NavBar extends Component {

    // Storing session storage as an object in state named currentUser
    state = {
        isActive: false,
    }

    onClickNav = function (e) {
        this.setState({
            isActive: (!this.state.isActive)
        })
        const navTarget = e.target.id.split("_")[1]

        if (navTarget) {
            const targetElement = document.getElementById(navTarget)
            targetElement.scrollIntoView({ behavior: "smooth" })
        }
    }.bind(this)

    render() {
        return (
            <Navbar className="is-fixed-top" style={{ backgroundColor: 'black' }}>
                <NavbarBrand>
                    <NavbarItem>
                        <img src={brand} style={{ marginRight: 5 }} alt=""/>
                    </NavbarItem>
                    <NavbarItem isHidden="desktop">{this.props.gamertag}</NavbarItem>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarItem className="clickable" onClick={this.onClickNav} id="nav_home"><span className="text-white no-click">Home</span></NavbarItem>
                    <NavbarItem className="clickable" onClick={this.onClickNav} id="nav_music"><span className="text-white no-click">Music</span></NavbarItem>
                    <NavbarItem className="clickable" onClick={this.onClickNav} id="nav_calendar"><span className="text-white no-click">Tour</span></NavbarItem>
                    <NavbarItem className="clickable" onClick={this.onClickNav} id="nav_contact"><span className="text-white no-click">Contact</span></NavbarItem>
                    <NavbarItem className="clickable" onClick={this.onClickNav} id="nav_social"><span className="text-white no-click">Instagram</span></NavbarItem>
                </NavbarMenu>
                <NavbarEnd>
                    <NavbarItem isHidden="touch">{this.props.gamertag}</NavbarItem>
                </NavbarEnd>
            </Navbar>
        )


    }
}

export default NavBar