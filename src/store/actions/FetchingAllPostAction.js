import { getAllPosts } from "../../services/ApiFunctions";

export const FETCH_ALL_POST = "FETCH_ALL_POST";

export function fetchingAllPosts() {
  return async dispatch => {
    const result = getAllPosts();
    dispatch({
      type: FETCH_ALL_POST,
      payload: result
    });
  };
}
