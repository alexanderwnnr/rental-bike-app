const updateOrder = (state, itemId, quantity) => {
    const { itemList: { items }, shoppingCart: { cartItems }} = state
    const item = items.find((item) => item.id === itemId)
    const itemIndex = cartItems.findIndex(({id}) => id === itemId)
    const addedItem = cartItems[itemIndex]

    const newItem = updateCartItem(item, addedItem, quantity)
        return {
            orderTotal: 0,
            cartItems: updateCartItems(cartItems, newItem, itemIndex)
        }
}

const updateCartItems = (cartItems, addedItem, idx) => {
    
    if(addedItem.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    
    if(idx === -1){
        return [
            ...cartItems,
            addedItem
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        addedItem,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (item, addedItem = {}, quantity) => {

    const { id = item.id, name = item.name, count = 0, total = 0 } = addedItem

    return {
        id,
        name,
        count: count + quantity,
        total: total + quantity*item.price
    }
}

const updateRList = (state, action) => {

    if(state === undefined){
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'ITEM_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1) 
        case 'ITEM_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)
        case 'ALL_ITEMS_REMOVED_FROM_CART':
            const addedItem = state.shoppingCart.cartItems.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -addedItem.count)
        default:
            return state.rList
    }
}

export default updateRList

