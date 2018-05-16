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
      user: [],
      newUser: emptyUser,
    };
    // makes 'this' in handlechange the same as this in the constructor
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      newUser: {
        ...this.state.newUser,
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
      user: [
        ...this.state.user,
        this.state.newUser,
      ]
    });
    this.setState({
      newUser: emptyUser,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newUser.name} onChange={this.handleChangeFor('name')} placeholder="User Name" />
          <input value={this.state.newUser.city} onChange={this.handleChangeFor('city')} placeholder="City Name" />
          <input value={this.state.newUser.zip} onChange={this.handleChangeFor('zip')} placeholder="Zip Code" />
          <input type="submit" value="Click to Submit" />
        </form>
              
        <ul>
          {this.state.user.map(user => <li key={user.name}>
          {user.name} is from {user.city} {user.zip}
          </li>)}
        </ul>
      </div>

    );
  }
}

export default App;
