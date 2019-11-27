import { SEARCH_POST } from "../actions/SearchingPostsAction";

const INITIAL_STATE = {
  Searchposts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_POST:
      return {
        Searchposts: action.payload
      };

    default:
      return state;
  }
};
