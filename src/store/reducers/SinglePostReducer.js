
import { SINGLE_POST } from '../actions/SinglePostAction'


const INITIAL_STATE = {
    post: {}


}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SINGLE_POST:
            return {
                post: action.payload
            }
        default:
            return state;

    }


}