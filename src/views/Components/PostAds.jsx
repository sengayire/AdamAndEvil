import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import ImageUploader from "react-images-upload";
class PostAds extends Component {
  state = {
    files: []
  };
  handleChange = files => {
    this.setState({
      files: files
    });
  };

  theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: "#007bff"
      }
    }
  });
  render() {
    const { classes } = this.props;
    return (
      <div>
        <DropzoneArea onChange={this.handleChange} />
      </div>
    );
  }
}

export default PostAds;
