import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {user: {name: '', city: ''}} ;
    

   

    // makes 'this' in handlechange the same as this in the constructor
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // console.log('input was changed');
    console.log('event.target', event.target.value)
    // this.state.user = event.target.value;
    this.setState({user: { name: event.target.value, city: this.state.user.city }});
  }

  handleCityChange = (event) => {
    this.setState({user: { city: event.target.value, name: this.state.user.name}});
  }

  buttonClick = () => {
    console.log(this.state.user);
  }

  render() {
    return (
      <div>
        <p>User {this.state.user.name}</p>
        <input onChange={this.handleChange} placeholder="username" />
        <p>is from {this.state.user.city}</p>
        <input onChange={this.handleCityChange} placeholder="city" />
        <button onClick={this.buttonClick}> Submit </button>
      </div>
    );
  }
}

export default App;
