import { addPost } from "../../services/ApiFunctions";
export const ADD_POST = "ADD_POST";

export function addPostAction(post) {
  return async dispatch => {
    const result = addPost(post);

    dispatch({
      type: ADD_POST,
      payload: { ...post, id: result }
    });
  };
}
