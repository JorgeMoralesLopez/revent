import React, { Component } from "react";
import { connect } from 'react-redux'
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from './Menus/SignedOutMenu';
import SignedInMenu from './Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions';

const action = {
  openModal,
  logout
}

const mapStateToprops = state => {
  return {
    auth: state.auth
  }
}

class NavBar extends Component {
  
  

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  }

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to='/' header style={{margin: 0, padding: 0}}>
            <img src="../assets/logoblancoEventos.png" alt="logo" style={{height: '47%', width: '47%'}}/>
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name="Events" />
          <Menu.Item as={NavLink} to='/test' name="Test" />
          {authenticated && <Menu.Item as={NavLink} to='/people' name="Peolple" />}
          
          {authenticated && 
            <Menu.Item>
              <Button 
                as={Link} to='/createEvent' 
                floated="right" 
                positive 
                inverted 
                content="Create Event" 
              />
            </Menu.Item>
          }
          

          {authenticated ? (
              <SignedInMenu currentUser={auth.currentUser} signOut={this.handleSignOut} />
            ) : (
              <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
          
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(mapStateToprops, action)(NavBar));
