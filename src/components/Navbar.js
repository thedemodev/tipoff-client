import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import logo from "../assets/logos/tipoffLogosvg3.svg";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-between"
    }
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <AppBar position="static" style={{ backgroundColor: "#2c2827" }}>
            <Toolbar className={classes.root}>
                <Typography>
                    <Link href="/">
                        <img
                            src={logo}
                            alt="tip off logo"
                            style={{ width: "300px" }}
                        />
                    </Link>
                </Typography>
                <div>
                    <Button
                        style={{
                            color: "#FF6200",
                            fontSize: "25px",
                            margin: "0 10px"
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        style={{
                            color: "#CF1EF8",
                            fontSize: "25px",
                            margin: "0 10px"
                        }}
                    >
                        Sign Up
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
