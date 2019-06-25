import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import * as actions from "./Actions-creater";
import ListElement from "../src/listElement.js";

class App extends Component {
  componentDidMount() {
    this.props.list();
  }
  handleRemoveMovieFromMyList = id => {
    this.props.removeMovieFromMyList(id);
  };
  handleAddMovietoMyList = id => {
    this.props.addMovieToMyList(id);
  };
  render() {
    const { myList, recommendations } = this.props;
    // console.log(myList, recommendations);
    return (
      <div className="App">
        <h1>Netflix</h1>
        <h2>My List</h2>
        <div className="myList">
          {myList.map((element, index) => {
            // console.log(element);
            return (
              <div className="movie">
                <div className="postShow">
                  <div className="overlay" />
                  <ListElement element={element} />
                  <div>
                    <button
                      onClick={() => this.handleRemoveMovieFromMyList(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h2>Recommendations</h2>
        <div className="recommendations">
          {recommendations.map((element, index) => {
            return (
              <div className="movie">
                <div className="postShow">
                  <div className="overlay" />
                  <ListElement element={element} />
                  <div>
                    <button onClick={() => this.handleAddMovietoMyList(index)}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    recommendations: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeMovieFromMyList: id => {
      dispatch(actions.removeMovieFromMyList(id));
    },
    addMovieToMyList: id => {
      dispatch(actions.addMovieToMyList(id));
    },
    list: () => {
      dispatch(actions.getList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
