import updateAList from './aListR'
import updateRList from './rListR'

const reducer = (state, action) => {

    return {
        aList: updateAList(state, action)

    }
}

export default reducer