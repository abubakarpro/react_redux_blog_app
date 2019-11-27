import { deletePostById } from '../../services/ApiFunctions'

export const DELETE_POST = "DELETE_POST"



export function deletePost(id) {
    return async (dispatch) => {
        const result = deletePostById(id);
        dispatch({
            type: DELETE_POST,
            payload: result
        });

    }

}
