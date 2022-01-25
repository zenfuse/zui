import * as R from "ramda";
import { initializeStore } from "~redux/index";
import { exchangesGet } from "~redux/slices/exchanges/thunks";
import { tickersGet } from "~redux/slices/tickers/thunks";

export const getPreloadedSlices = (preloadedState, state) => ({
  tickers:
    R.prop("tickers", state) || R.prop("tickers", preloadedState) || null,
  exchanges:
    R.prop("exchanges", state) || R.prop("exchanges", preloadedState) || null,
});

export const checkStateHydrated = (state) =>
  R.path(["exchanges", "ids", "length"], state);

export const getPreloadedStore = async () => {
  const { dispatch, getState } = initializeStore();
  await tickersGet({})(dispatch);
  await exchangesGet({})(dispatch);

  return {
    props: {
      initialReduxState: getState(),
    },
    revalidate: 300,
  };
};

export const withHydration = (reducer) => (state, action) => {
  if (action.type === "@@HYDRATE") {
    return action.payload;
  }

  return reducer(state, action);
};
