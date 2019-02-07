import { createAsyncActionTypes } from 'helpers/redux';
// Async Action Types
const shapeAsyncActions = createAsyncActionTypes('SHAPE', ['FETCH'])

export default Object.assign({}, shapeAsyncActions);
