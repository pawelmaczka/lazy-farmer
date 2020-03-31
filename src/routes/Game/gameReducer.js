import { useCallback, useReducer } from 'react';

const initialState = {
  isDataFetched: false,
  isSavingAvatar: false,
  farm: null,
};

const DATA_FETCHED = 'data-fetched';

function gameReducer(state, action) {
  switch (action.type) {
    case DATA_FETCHED:
      return {
        isDataFetched: true,
        farm: action.payload,
      };
    default:
      return state;
  }
}

function useGameReducer(initState = initialState) {
  const [state, dispatch] = useReducer(gameReducer, initState);

  const dataFetched = useCallback((payload) => {
    dispatch({
      type: DATA_FETCHED,
      payload,
    });
  }, []);

  const actions = {
    dataFetched,
  };

  return [state, actions];
}

export default useGameReducer;
