import * as actionType from '../constants/actionsType'

const initialState = {
    drawerOpen:true,
    drawerContent:'oreo'
}

const reducer = (state=initialState, action) =>{
    if(action.type === actionType.DRAWER_OPEN){
        return {
            ...state,
            drawerOpen : !state.drawerOpen
        }
    }
    if(action.type === actionType.DRAWER_CONTENT_CHANGE){
        return {
            ...state,
            drawerContent: action.contentOf
        }
    }
    return state
}

export default reducer 