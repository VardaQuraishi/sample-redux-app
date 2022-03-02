import React from 'react';
import { connect } from 'react-redux';

function App({
  count,
  countUp,
  countDown,
  category,
  switchToEng,
  switchToMath,
}) {
  console.log('count: ', category);
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <div>category: {category} </div>
      <button onClick={switchToEng}>English </button>
      <button onClick={switchToMath}>Math</button>
    </div>
  );
}

const mapStateToProps = ({ countReducer, categoryReducer }) => {
  return {
    count: countReducer.count,
    category: categoryReducer.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countUp: () => dispatch({ type: 'COUNT_UP' }),
    countDown: () => dispatch({ type: 'COUNT_DOWN' }),
    switchToEng: () => dispatch({ type: 'SWITCH_TO_ENGLISH' }),
    switchToMath: () => dispatch({ type: 'SWITCH_TO_MATH' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// when the action is triggered the watcher functions within the sagas listen and maps the action to the function that will be called