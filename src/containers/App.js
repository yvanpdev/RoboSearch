import React, { Component } from 'react';
import axios from 'axios';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(users => {this.setState( { robots: users.data })});
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1> Loading... </h1> :
     (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
