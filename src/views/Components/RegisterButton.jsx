import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.jsx";

const RegisterButton = classes => (
  <ListItem className={classes.listItem} style={{display: 'flex'}}>
    <Link to={"/register-page"}>
      <Button
        href=""
        color="transparent"
        target="_blank"
        style={{ color: "black" }}
        className={classes.navLink}
      >
        Register
      </Button>
    </Link>
  </ListItem>
);

export default RegisterButton;
