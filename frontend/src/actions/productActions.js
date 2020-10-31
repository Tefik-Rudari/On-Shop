import axios from 'axios'

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
} from '../constants/productConstants'

// This is an action - dispatch action to the reducers
export const listProducts = () => async (dispatch) => {
  try {
    // First we make the request
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products')

    // If we get our successsful response then we dispatch this
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data // we get the data if success and fill the payload
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      // If it has a non generic(our made error) error than give us our error if not then the default
    })
  }
}