import React, { Component } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import classNames from "classnames";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import NavPills from "components/NavPills/NavPills.jsx";
import studio1 from "../../assets/img/examples/studio-1.jpg";
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-2.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import studio5 from "../../assets/img/examples/studio-5.jpg";
import work1 from "../../assets/img/examples/studio-1.jpg";
import work2 from "../../assets/img/examples/studio-2.jpg";
import work3 from "../../assets/img/examples/studio-2.jpg";
import work4 from "../../assets/img/examples/studio-4.jpg";
import work5 from "../../assets/img/examples/studio-5.jpg";
class AdsImagesDisplay extends Component {
  render() {
    const { classes } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="success"
              tabs={[
                {
                  tabButton: "Studio",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={studio1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio2}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={studio5}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio4}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Work",
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={work1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work2}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work3}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={work4}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work5}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Favorite",
                  tabIcon: Favorite,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={work4}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio3}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={work2}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio1}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default AdsImagesDisplay;
