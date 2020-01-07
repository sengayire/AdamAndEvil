import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions";
import Button from "components/CustomButtons/Button.jsx";
import ListItem from "@material-ui/core/ListItem";
class Logout extends Component {
  render() {
    const { classes, color, ...props } = this.props;

    return (
      <div style={{ display: "inline" }}>
        <ListItem className={classes.listItem}>
          <Button
            href=""
            color={color}
            target="_blank"
            style={{ color: "white" }}
            onClick={() => props.dispatch(logout())}
            className={classes.navLink}
          >
            Logout
          </Button>
        </ListItem>
      </div>
    );
  }
}

export default connect(dispatch => ({ dispatch }))(Logout);
