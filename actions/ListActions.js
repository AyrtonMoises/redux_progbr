const addItemAction = (item) => { return { type: 'ADD_ITEM', payload: item  } }
const addItemThunkAction = (item) => { return { type: 'ADD_ITEM_THUNK', payload: item  } }

module.exports = { addItemAction, addItemThunkAction }