import $ from 'redux/types/shape';

const defaultState = {
  isLoading: true,
}

export const shape = (prevState = defaultState, action) => {
  switch(action.type) {
    case $.FETCH_SHAPE_REQUEST:
    case $.FETCH_SHAPE_SUCCESS:
    case $.FETCH_SHAPE_FAILURE:
      return {
        ...prevState,
        ...action.payload,
      };

    default:
      return prevState;
  }
};