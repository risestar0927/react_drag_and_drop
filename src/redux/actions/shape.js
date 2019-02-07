import { createAsyncAction} from 'helpers/redux';
import Fetch from 'helpers/fetch';

import $ from 'redux/types/shape';

export const fetchShape = () => createAsyncAction(
  Fetch.get({
    path: 'api/forms/5c1be3d810ff32b53335d50f/sections',
  }),
  $.FETCH_SHAPE_REQUEST,
)