// import data from "../Data/data";

const initState = {
  isFetching: false,
  myList: [],
  recommendations: [],
  err: null
};
const myList = (state = initState, action) => {
  switch (action.type) {
    case "DATA_FETCH_START":
      return {
        ...state,
        isFetching: true
      };
    case "DATA_FETCH_FAIL":
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        err: null,
        myList: action.data[0].mylist,
        recommendations: action.data[0].recommendations
      };
    case "REMOVE_MOVIE_FROM_MYLIST":
      return {
        myList: [
          ...state.myList.slice(0, action.id),
          ...state.myList.slice(action.id + 1)
        ],
        recommendations: [...state.recommendations, state.myList[action.id]]
      };
    case "ADD_TO_MYLIST":
      return {
        myList: [...state.myList, state.recommendations[action.id]],
        recommendations: [
          ...state.recommendations.slice(0, action.id),
          ...state.recommendations.slice(action.id + 1)
        ]
      };
    default:
      return state;
  }
};

export default myList;
