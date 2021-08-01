import {
  Dispatch,
  MiddlewareAPI,
} from 'redux';

export const serviceThunkMiddleware = ({dispatch, getState}: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if (typeof action.service === 'function') {
    const {service, ...args} = action;
    dispatch({
      type: service.name,
      ...args
    });

    return service(args)(dispatch, getState);
  }

  return next(action);
};