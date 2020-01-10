import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import work5 from "../../assets/img/examples/studio-5.jpg";
const cloudinary = require("cloudinary/lib/cloudinary");

class PostAds extends Component {
  state = {
    files: []
  };
  componentWillReceiveProps(nextProps) {
    const { clicked } = nextProps;
    const { files } = this.state;
    if (clicked) {
      cloudinary.uploader.upload(
        "../../assets/img/examples/studio-5.jpg",
        function(error, result) {
          console.log(result);
        }
      );
    }
  }

  handleChange = files => {
    this.setState({
      files: files
    });
  };
  render() {
    return (
      <div>
        <DropzoneArea onChange={this.handleChange} />
      </div>
    );
  }
}

export default PostAds;
