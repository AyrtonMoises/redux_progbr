const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const thunk = require('redux-thunk').default
const fetch = require('node-fetch')


const { incrementAction, decrementAction } = require('./actions/CounterActions')
const { addItemAction, addItemThunkAction } = require('./actions/ListActions')
const counterReducer = require('./reducers/CounterReducer')
const { listReducer, listThunkReducer } = require('./reducers/ListReducer')


const loadItemAndAdd = () =>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(json=>{
            dispatch(addItemThunkAction(json))
        })
    }
}

const allReducers = combineReducer({
    counter: counterReducer,
    list: listReducer,
    listThunk: listThunkReducer
})

const store = createStore(allReducers, redux.applyMiddleware(thunk))
console.log(store.getState())

store.subscribe(() => {console.log(store.getState())})
//store.subscribe(() => {console.log(store.getState().list)})
//store.subscribe(() => {console.log(store.getState().counter)})

store.dispatch(incrementAction(2))
store.dispatch(decrementAction(1))
store.dispatch(addItemAction('novo item'))
store.dispatch(addItemThunkAction({id:1, title:"Nova tarefa", completed: false}))
store.dispatch(loadItemAndAdd())
