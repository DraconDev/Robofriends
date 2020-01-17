import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/Errorboundry";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispathToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: () => requestRobots(dispatch),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

//Main APP
class App extends Component {

  // Getting robot list
  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {

    //Bind store
    const { searchField, onSearchChange, robots, isPending } = this.props;

    //Display robots
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div>
          <h1 className="title">ROBOFRIENDS</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(App);
