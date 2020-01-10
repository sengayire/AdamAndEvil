import React, { Component } from "react";
import { connect } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import Parallax from "components/Parallax/Parallax.jsx";
import profile from "assets/img/faces/christian.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import ModelButton from "../../components/ModelButton/ModelButton";
import AdsImagesDisplay from "../Components/AdsImagesDisplay";
import PostAds from "../Components/PostAds";

class ProfilePage extends Component {
  state = {
    classes: {},
    state: {}
  };
  componentWillMount = () => {
    const { classes, state } = this.props;
    this.setState({
      classes,
      state
    });
  };

  save = () => {
    this.setState({
      clicked: true
    });
  };

  render() {
    const { ...rest } = this.props;
    const { classes, state, clicked } = this.state;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="black"
          brand="AdamAndEvil"
          rightLinks={<HeaderLinks color="danger" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes && classes.name}>
                      <h3 className={classes && classes.title}>
                        {state && state.user.name} {state && state.user.surname}
                      </h3>
                      <br />
                      <ModelButton
                        classes={classes}
                        role="post ads"
                        color="success"
                        onClick={this.save}
                        title="Post Ads"
                        content={
                          <PostAds clicked={clicked} classes={classes} />
                        }
                      />{" "}
                      <ModelButton
                        classes={classes}
                        role="View your ads"
                        title="Your Ads"
                        content={<AdsImagesDisplay classes={classes} />}
                      />
                      <br />
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const ProfilePageContainer = connect(state => ({ state }))(ProfilePage);
export default withStyles(profilePageStyle)(ProfilePageContainer);
