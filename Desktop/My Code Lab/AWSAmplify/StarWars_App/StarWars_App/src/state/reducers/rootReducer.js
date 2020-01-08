import { combineReducers } from 'redux'
import { StarWarsPeopleReducer } from './requests/StarWarsPeople/StarWarsPeople.reducer';

export const rootReducer = combineReducers({
  StarWarsPeople: StarWarsPeopleReducer,
});
