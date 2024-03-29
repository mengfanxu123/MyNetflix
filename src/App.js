import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import * as actions from "./Actions-creater";
import Reusebutton from "../src/reusebutton.js";
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
        <img
          className="logo"
          src="https://store-images.s-microsoft.com/image/apps.51445.9007199266246365.c6dce6b1-5edd-4e64-a117-0e45b8165403.c7938026-2c39-48b0-b8f8-067273b77187"
        />

        <h2>My List</h2>
        <div className="myList">
          {myList.map((element, index) => {
            // console.log(element);
            return (
              <div className="movie">
                <div className="postShow">
                  <div className="overlay" />
                  {/*this is reusedable component both from my list and recommedation */}
                  <Reusebutton
                    element={element}
                    handle={this.handleRemoveMovieFromMyList}
                    index={index}
                    text="remove"
                  />
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
                  {/*this is reusedable component both from my list and recommedation, when you click it, will happend */}
                  <Reusebutton
                    element={element}
                    handle={this.handleAddMovietoMyList}
                    index={index}
                    text="add"
                  />
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
