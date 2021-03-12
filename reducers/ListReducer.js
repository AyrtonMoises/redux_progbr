function listReducer(state = [], action){

    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload]
        default:
            return state
    }
}

const initialState = [{id:0, title: "Tarefa", completed: false}]

function listThunkReducer(state = initialState, action){

    switch(action.type){
        case 'ADD_ITEM_THUNK':
            return [...state, action.payload]
        default:
            return state
    }
}



module.exports = {
    listReducer,
    listThunkReducer
}