import React, { Component } from 'react';

const emptyUser = {
  name: '', 
  city: '',
  zip: '',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: emptyUser,
    };
    // makes 'this' in handlechange the same as this in the constructor
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChangeFor = propertyName => event => {
      this.setState({
        user: {
          ...this.state.user,
          [propertyName]: event.target.value,
        }
      });
    }

  // handleChangeFor = (propertyName) => {
  //   return (event) => {
  //     this.setState({
  //       user: {
  //         ...this.state.user,
  //         [propertyName]: event.target.value,
  //       }
  //     });
  //   }
  // }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user);
    this.setState({
      user: emptyUser,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.user.name} onChange={this.handleChangeFor('name')} placeholder="User Name" />
        <input value={this.state.user.city}onChange={this.handleChangeFor('city')} placeholder="City Name" />
        <input value={this.state.user.zip}onChange={this.handleChangeFor('zip')} placeholder="Zip Code" />
        <p>{this.state.user.name} is from {this.state.user.city} {this.state.user.zip}</p>
        <input type="submit" value="Click to Submit"/>
        </form>
      </div>
      
    );
  }
}

export default App;
