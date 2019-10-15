import axios from 'axios';
import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from './type.js';

// actions
const fetchProductRequest = () => ({
    type: GET_PRODUCT_REQUEST,
    isLoading: true,
    foundError: false
})

const fetchProductSuccess = payload => ({
    type: GET_PRODUCT_SUCCESS,
    isLoading: false,
    foundError: false,
    payload: payload
})

const fetchProductFail = () => ({
    type: GET_PRODUCT_FAIL,
    isLoading: false,
    foundError: true
})

// action dispatcher
export const fetchProductData = () => dispatch => {
    dispatch(fetchProductRequest())
    axios.get('inventory.json')
        .then(res => {
            dispatch(fetchProductSuccess(res.data))
        })
        .catch(error => {
            dispatch(fetchProductFail())
        })

}

// reducer
export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                foundError: action.foundError
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: action.isLoading,
                foundError: action.foundError
            }

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: action.isLoading,
                foundError: action.foundError,
                payload: action.payload
            }
        default:
            return state
    }
}

export default productReducer;