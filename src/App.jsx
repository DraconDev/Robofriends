import React, { Component } from "react";
import CardList from "./CardList";
// import {
//     robots
//   } from "./robots";
import SearchBox from "./SearchBox";
// import { robots } from "./Robots";
import Scroll from "./Scroll";

// const App = () => {
//     return (
//         <div>
//         <h1>RoboFriends</h1>
//         <SearchBox/>
//          <CardList robots={robots}/>
//          </div>
//     )
// }

  

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }
  // Getting robot list
  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => { return response.json();})
    .then(users => {this.setState({robots:users})})
    // this.setState({robots: robots}); 
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})

    // console.log(event.target.value);
    // console.log(filteredRobots);
  }
  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div>
      <h1 className="title">ROBOFRIENDS</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
       <CardList robots={filteredRobots}/>
      </Scroll>
       </div>
  )
  }
  
  }
}

export default App;