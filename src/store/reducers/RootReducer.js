import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import SinglePostReducer from "./SinglePostReducer";
import SearchPostsReducer from "./SearchPostsReducer";

const RootReducer = combineReducers({
  Posts: PostsReducer,
  SinglePost: SinglePostReducer,
  SearchResult: SearchPostsReducer
});

export default RootReducer;
