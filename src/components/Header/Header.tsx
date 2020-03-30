import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";





const Header = ({
  logout
}) => {
        return (<AppBar color="inherit" position="fixed" elevation={0}>
            <Grid container className="container">
                <Grid item xs={12}>
                    <Toolbar disableGutters style={{ justifyContent: "space-between" }}>


                        <div style={{ display: "flex", minWidth: 0 }}>
                            <Button variant="contained" color="primary" onClick={() => logout()}>
                                Logout
                            </Button>
                        </div>
                    </Toolbar>
                </Grid>
            </Grid>
            <Divider light />
        </AppBar>);
    };

Header.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Header;
