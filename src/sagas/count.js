import { takeLatest, put } from 'redux-saga/effects';

function* countUpAsync() {
  yield put({ type: 'COUNT_UP_ASYNC' });
}

function* countDownAsync() {
  yield put({ type: 'COUNT_DOWN_ASYNC' });
}

export function* watchCountSagas() {
  yield takeLatest('COUNT_UP', countUpAsync);
  yield takeLatest('COUNT_DOWN', countDownAsync);
}
//watcher functions will be combined in one root saga which will be listenned by the main application