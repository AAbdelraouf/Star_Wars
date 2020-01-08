import { all } from 'redux-saga/effects';
import StarWarsPeopleSaga from './StarWarsPeople/StarWarsPeople.saga';

export default function* rootSaga() {
  yield all([
    StarWarsPeopleSaga(),
  ]);
}
