# Thunk Enhancer Middleware

Wrappers over redux-thunk allowing to reduce the redux boilerplate.

## Install

Install from the NPM repository using yarn or npm:

```shell
yarn add --dev @pbe/thunk-enhancer-middleware
```

```shell
npm install -D @pbe/thunk-enhancer-middleware
```

## API
- [mutationReducer](#mutationreducer)
- [mutationThunkMiddleware](#mutationthunkmiddleware)
- [serviceThunkMiddleware](#servicethunkmiddleware)

## mutationReducer

Example of usage:
```js
const store = createStore(mutationReducer);
```

## mutationThunkMiddleware

Used only with `mutationReducer`.

Example of usage:
```js

const mutateEntity = ({ counter }) => {
    return (dispatch, getState, mutateStore) => {
        mutateStore('counter', { counter });
    }
}

dispatch({
  mutation: mutateEntity,
  counter: 1
});
```

## serviceThunkMiddleware

Example of usage:
```js

const serviceGetPost = ({ postId }) => {
    return (dispatch, getState) => {
        fetch(`/api/v1/posts/${postId}`);
    }
}

dispatch({
  service: serviceGetPost,
  postId: '123',
});
```
