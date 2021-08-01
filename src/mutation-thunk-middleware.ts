import {
  Dispatch,
  MiddlewareAPI,
} from 'redux';

export const mutationThunkMiddleware = ({dispatch, getState}: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if (typeof action.mutation === 'function') {
    const {mutation, ...args} = action;
    const mutateStore = (key, state) => {
      dispatch({
        mutation: true,
        type: mutation.name,
        key,
        args,
        state
      });
    };

    return mutation(args)(dispatch, getState, mutateStore);
  }

  return next(action);
};