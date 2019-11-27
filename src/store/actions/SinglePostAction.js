import { getPostById } from '../../services/ApiFunctions';
export const SINGLE_POST = "SINGLE_POST"


export function fetchSinglePost(id) {
    return async (dispatch) => {
        const result = getPostById(id);


        dispatch({
            type: SINGLE_POST,
            payload: result
        });

    }

}