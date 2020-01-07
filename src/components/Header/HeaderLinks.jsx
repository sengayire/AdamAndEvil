/*eslint-disable*/
import React, { Component } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Logout from "../../views/Components/Logout";
import RegisterButton from "../../views/Components/RegisterButton";


class HeaderLinks extends Component {

  render(){
    const { classes, color, state, ...props } = this.props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Pages"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Home
            </Link>,
            <Link to="/profile-page" className={classes.dropdownLink}>
              Profile
            </Link>,
            <Link to="/components" className={classes.dropdownLink}>
              Components
            </Link>
          ]}
        />
      </ListItem>
      
        <ListItem className={classes.listItem}>
            <Link to={state.user ? "/profile-page" : "/login-page"}>
                <Button 
                href=""
                color="transparent"
                target="_blank"
                style={{color: "black"}}
                className={classes.navLink}>{state.user ? `${state.user.name} ${state.user.surname}` : `Login`}</Button>
            </Link>
        </ListItem>
        {
            state.user ? <Logout color={color} classes/> : <RegisterButton classes={classes} />
        }
    </List>
  );
  }
}

const HeaderLinksContainer = connect(state => ({ state }))(HeaderLinks);

export default withStyles(headerLinksStyle)(HeaderLinksContainer);
