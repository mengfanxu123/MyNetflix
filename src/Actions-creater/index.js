import axios from "axios";

export function requestStart() {
  return {
    type: "DATA_FETCH_START"
  };
}
export function requestSuccess(response) {
  return {
    type: "DATA_FETCH_SUCCESS",
    data: response.data
  };
}
export function requestFail(error) {
  return {
    type: "DATA_FETCH_FAIL",
    error
  };
}

export function getList() {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .get("https://5d11c0f984e9060014576512.mockapi.io/NetflixData")
      .then(response => {
        console.log(response.data);
        dispatch(requestSuccess(response));
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
}

export function removeMovieFromMyList(id) {
  return {
    type: "REMOVE_MOVIE_FROM_MYLIST",
    id: id
  };
}

export function addMovieToMyList(id) {
  return {
    type: "ADD_TO_MYLIST",
    id: id
  };
}
