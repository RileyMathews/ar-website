import React, { Component } from 'react'
import { Navbar, NavbarItem, NavbarBurger, NavbarBrand, NavbarMenu, NavbarEnd } from "bloomer";


/* 
    module to handle displaying and logic of using the navigation bar
    authors Riley Mathews
*/
class NavBar extends Component {

    // Storing session storage as an object in state named currentUser
    state = {
        isActive: false,
    }

    onClickNav = function () {
        this.setState({
            isActive: (!this.state.isActive)
        })
    }.bind(this)

    render() {
        return (
            <Navbar className="is-fixed-top">
                <NavbarBrand>
                    <NavbarItem isHidden="desktop">{this.props.gamertag}</NavbarItem>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarItem>Home</NavbarItem>
                    <NavbarItem>Music</NavbarItem>
                    <NavbarItem>Tour</NavbarItem>
                    <NavbarItem>Instagram</NavbarItem>
                    <NavbarItem>Contact</NavbarItem>
                </NavbarMenu>
                <NavbarEnd>
                    <NavbarItem isHidden="touch">{this.props.gamertag}</NavbarItem>
                </NavbarEnd>
            </Navbar>
        )


    }
}

export default NavBar