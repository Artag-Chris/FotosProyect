import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });//aqui se estraen los post del grobal state
