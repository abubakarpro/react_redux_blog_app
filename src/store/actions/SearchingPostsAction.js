import { searchPosts } from "../../services/ApiFunctions";
export const SEARCH_POST = "SEARCH_POST";

export function searchingPostsAction(query) {
  return async dispatch => {
    const result = searchPosts(query);
    console.log(result);
    dispatch({
      type: SEARCH_POST,
      payload: result
    });
  };
}
