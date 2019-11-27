import { updatePost } from "../../services/ApiFunctions";
export const UPDATE_POST = "UPDATE_POST";

export function updatePostAction(post, id) {
  return async dispatch => {
    const result = updatePost(post, id);
    console.log(result);

    dispatch({
      type: UPDATE_POST,
      payload: result
    });
  };
}
