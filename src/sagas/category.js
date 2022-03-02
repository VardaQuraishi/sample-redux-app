import { takeLatest, put } from 'redux-saga/effects';

function* switchToEngAsync() {
  yield put({ type: 'SWITCH_TO_ENGLISH_ASYNC' });
}

function* switchToMathAsync() {
  yield put({ type: 'SWITCH_TO_MATH_ASYNC' });
}

export function* watchCategorySagas() {
  yield takeLatest('SWITCH_TO_ENGLISH', switchToEngAsync);
  yield takeLatest('SWITCH_TO_MATH', switchToMathAsync);
}
//watcher functions will be combined in one root saga which will be listenned by the main application