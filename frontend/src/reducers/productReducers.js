import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'


// This is a reducer
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      // Fill products with the payload
      return { loading: false, products: action.payload }
    // If successful will send the data to the payload
    case PRODUCT_LIST_FAIL:
      // Here will send the error in the payload
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// TO USE THESE REDUCERS WE NEED TO ADD THEM TO OUR STORE