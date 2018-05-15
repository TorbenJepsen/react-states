import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      city: ''
    };
   

    // makes 'this' in handlechange the same as this in the constructor
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // console.log('input was changed');
    console.log('event.target', event.target.value)
    // this.state.user = event.target.value;
    this.setState({ user: event.target.value });
  }

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  }

  buttonClick = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>User {this.state.user}</p>
        <input onChange={this.handleChange} placeholder="username" />
        <p>is from {this.state.city}</p>
        <input onChange={this.handleCityChange} placeholder="city" />
        <button onClick={this.buttonClick}> Submit </button>
      </div>
    );
  }
}

export default App;
