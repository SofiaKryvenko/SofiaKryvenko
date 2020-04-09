import React from "react";
import {NavLink} from "react-router-dom"

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SignupModal from "../../containers/Register";
import LoginModal from "../../containers/Login";

import {propOr} from "ramda"

const RenderLoggedMenu = ({logout,user}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };  

    const handleLogOut = () =>{
        logout();
        setAnchorEl(null);
    }

    return(
    <div>
      <span>Hi, {user.displayName}</span>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogOut}>Log out</MenuItem>
      </Menu>
    </div>
  )};

  class Header extends React.Component{

    constructor(props){
        super(props)
        this.state={
            isLoginModalOpen: false,
            isSignupModalOpen: false,
        }

        this.toggleLoginModal = this.setValue("isLoginModalOpen");
        this.toggleSignUpModal =this.setValue("isSignupModalOpen");
    }

    setValue=(field)=>value=>this.setState({[field]:value})

    renderAuthButtons = () => (
        <div >
          <Button
            onClick={()=>this.toggleLoginModal(true)}
            color="primary">Login</Button>
          <Button
            color="secondary"
            onClick={()=>this.toggleSignUpModal(true)}>Signup</Button>
          <SignupModal
            isOpen={this.state.isSignupModalOpen}
            closeModal={()=>this.toggleSignUpModal(false)}
            signup={this.props.signup}
          />
          <LoginModal
            isOpen={this.state.isLoginModalOpen}
            closeModal={()=>this.toggleLoginModal(false)}
          />
        </div>
      );

      


      render(){
        const {logout,auth}=this.props

          return(<AppBar color="inherit" position="fixed" elevation={0}>
          <Grid container className="container">
              <Grid item xs={12}>
                  <Toolbar disableGutters style={{ justifyContent: "space-between" }}>
                        <Typography variant="body2" >
                          <NavLink to="/"  color="primary" className="mt-10 link"> HOME</NavLink>
                        </Typography>

                      <div style={{ display: "flex", minWidth: 0 }}>
                          {auth.loggedIn
              ? <RenderLoggedMenu logout={logout} user={propOr({},'user',auth)}/>
              : this.renderAuthButtons()
          }
                      </div>
                  </Toolbar>
              </Grid>
          </Grid>
          <Divider light />
      </AppBar>);
      }
  }

export default Header;
