import { call, put, takeLatest } from 'redux-saga/effects';
import { StarWarsPeopleSagaType } from '../../types/sagas';
import {StarWarsPeopleRequest} from '../../../services'


export default function* StarWarsPeopleWatcherSaga() {
  yield takeLatest(StarWarsPeopleSagaType, StarWarsPeopleWorkerSaga);
}
export function* StarWarsPeopleWorkerSaga() {
  yield put({type: 'StarWarsPeopleRequesting'});
  try {
    const result = yield call(StarWarsPeopleRequest);
    yield put({ type: 'StarWarsPeopleSuccessData', payload: result });
  } catch (error) {
    yield put({ type: 'StarWarsPeopleFailed', payload: error })
  }
}
