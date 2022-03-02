import { watchCountSagas } from './count';
import { watchCategorySagas } from './category';
import { all } from 'redux-saga/effects';
export function* rootSaga() {
  yield all([watchCountSagas(), watchCategorySagas()]);
}
//listener that listens to all other saga files present