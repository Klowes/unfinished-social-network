import { combineReducers } from '@reduxjs/toolkit';
import * as features from 'features';

const reducer = combineReducers({
    ...features,
});

export default reducer;