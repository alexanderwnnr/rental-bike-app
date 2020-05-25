const itemsLoaded = (newItems) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newItems
    }
}
const itemsRequested = () => {
    return {
        type: 'FETCH_ITEMS_REQUEST'
    }
}
const itemsError = (error) => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    }
}

export const fetchItems = (dispatch) => {

    dispatch(itemsRequested())    
    dispatch({
                    type: 'FETCH_ITEMS_SUCCESS', 
                    payload: [ 
                        {
                            name: '1'
                        },
                        {
                            name: '2'
                        },
                        {
                            name: '3'
                        }
                    ]
        }
    )

        
}


// getItem = async () => {
//     //resolve(this.data)
//     const data = await axios.get('/api/items')
//     return data
// }