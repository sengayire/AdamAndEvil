import React, { Component } from "react";
import SectionLogin from "../Components/Sections/SectionLogin";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

class RegisterPage extends Component {
  state = {};
  handleInputChange = e => {
    // const { name, value } = e.target;
    const input = {
      [e.target.name]: e.target.value
    };
    this.setState(prevState => ({
      ...prevState,
      ...input
    }));
  };

  submitForm = e => {
    e.preventDefault();
    const { firstName, surName, email, password } = this.state;
    const user = {
      name: firstName,
      surname: surName,
      email,
      password
    };

    const url = "http://localhost:3000/api/users/signup";
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user) // body data type must match "Content-Type" header
    })
      .then(res => res.json())
      .then(data => {
        const { errors, user } = data;

        this.setState({
          email: { ...this.state.email, errors: [] },
          password: { ...this.state.password, errors: [] }
        });

        if (errors) {
          for (let name in errors) {
            const errorMessage = errors[name];

            this.setState(state => ({
              [name]: {
                ...state[name],
                errors: [...state[name].errors, errorMessage]
              }
            }));
          }
          console.log("errors", errors);
          return;
        }

        // if (user) {
        //   const { token, ...userData } = user;

        //   Cookies.create("token", token, null);

        //   this.props.dispatch(login(userData));
        //   this.props.history.push("/");
        // }
      });
  };
  render() {
    const { rest } = this.props;
    return (
      <div>
        <SectionLogin
          handleInputChange={this.handleInputChange}
          submitForm={this.submitForm}
        />{" "}
      </div>
    );
  }
}

export default RegisterPage;
