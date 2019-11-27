import { FETCH_ALL_POST } from "../actions/FetchingAllPostAction";
import { ADD_POST } from "../actions/AddPostAction";
import { DELETE_POST } from "../actions/DeletePostAction";
import { UPDATE_POST } from "../actions/UpdatePostAction";

const INITIAL_STATE = {
  posts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return {
        ...state,
        posts: [...action.payload]
      };
    case ADD_POST:
      console.log(action.payload);
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    case DELETE_POST:
      return {
        ...state,
        posts: [...action.payload]
      };
    case UPDATE_POST:
      console.log(action.payload);
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
};
