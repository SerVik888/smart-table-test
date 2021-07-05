import dataSources from './state'

const SET_DATA = 'SET_DATA'
const SORT_TOP_NAME = 'SORT_TOP_NAME'
const SORT_DOWN_NAME = 'SORT_DOWN_NAME'
const SORT_TOP = 'SORT_TOP'
const SORT_DOWN = 'SORT_DOWN'


let initialState = {
    data: [],
    sortDataId: ''
}

const trafficTableReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SORT_TOP_NAME: {
            return {
                ...state,
                data: [...state.data.sort((a, b) => a.object.name < b.object.name ? 1 : -1)],
                sortDataId: action.id
            }
        }
        case SORT_DOWN_NAME: {
            return {
                ...state,
                data: [...state.data.sort((a, b) => a.object.name < b.object.name ? -1 : 1)],
                sortDataId: action.id
            }
        }
        case SORT_DOWN: {
            return {
                ...state,
                data: [...state.data.sort((a, b) =>
                    a.sources.reduce((p, b) => p + b[action.item][action.key], 0)
                    >
                    b.sources.reduce((p, b) => p + b[action.item][action.key], 0) ? -1 : 1)],
                sortDataId: action.key
            }
        }
        case SORT_TOP: {
            return {
                ...state,
                data: [...state.data.sort((a, b) =>
                    a.sources.reduce((p, b) => p + b[action.item][action.key], 0)
                    <
                    b.sources.reduce((p, b) => p + b[action.item][action.key], 0) ? -1 : 1)],
                sortDataId: null
            }
        }

        default:
            return state
    }
}

export const sortTop = (item, key) => ({ type: SORT_TOP, item, key })
export const sortDown = (item, key) => ({ type: SORT_DOWN, item, key })
export const sortTopName = (id) => ({ type: SORT_TOP_NAME, id })
export const sortDownName = (id) => ({ type: SORT_DOWN_NAME, id })
const setData = (data) => ({ type: SET_DATA, data });

export const getData = () => (dispatch) => {
    let data = dataSources;
    dispatch(setData(data));
}


export default trafficTableReducer

