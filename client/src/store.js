import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'



const logMiddleware = ({getState}) => (dispatch) => (action) => {
    console.log(action.type, getState())
    return dispatch(action)
}

const store = createStore(reducer, applyMiddleware(logMiddleware, thunkMiddleware))


export default store