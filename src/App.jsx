import React, { Component } from "react";
import CardList from "./CardList";
import {
    robots
  } from "./robots";
import SearchBox from "./SearchBox"

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
      robots: robots,
      searchfield: ""
    }
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
    return (
      <div>
      <h1 className="title">ROBOFRIENDS</h1>
      <SearchBox searchChange={this.onSearchChange}/>
       <CardList robots={filteredRobots}/>
       </div>
  )

  }
}

export default App;