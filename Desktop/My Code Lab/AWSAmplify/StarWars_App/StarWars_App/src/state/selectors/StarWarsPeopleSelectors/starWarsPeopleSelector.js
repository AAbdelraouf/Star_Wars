import _ from 'lodash';
import { createSelector } from 'reselect';

export const starWarsPeople = state => state.StarWarsPeople;

export const starWarsPeopleResults = createSelector(starWarsPeople, StarWarsPeople => _.get(StarWarsPeople.result, 'results'));
export const starWarsPeopleRequesting = createSelector(starWarsPeople, StarWarsPeople => _.get(StarWarsPeople, 'isRequesting'));
export const starWarsPeopleError = createSelector(starWarsPeople, StarWarsPeople => _.get(StarWarsPeople, 'error'));
