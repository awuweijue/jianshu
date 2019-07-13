import * as constants from './constants'

import Axios from 'axios'

import { fromJS } from 'immutable'

export const searchFocus = ()=> ({
    type : constants.SEARCH_FOCUS
})

export const searchBlur = ()=> ({
    type : constants.SEARCH_BLUR
})

export const mouseEnter = ()=> ({
    type : constants.MOUSE_ENTER
})

export const mouseLeave = ()=> ({
    type : constants.MOUSE_LEAVE
})

export const changePage = (page)=> ({
    type : constants.CHANGE_PAGE,
    page
})

const changeList = (data)=> ({
    type : constants.CHANGE_LIST,
    data : fromJS(data),
    totalPage : Math.ceil(data.length / 10),
    total : data.length,
})

export const getList = ()=> (
    (dispatch)=>{
        Axios.get('/api/headerList.json')
            .then(res=>{
                const action = changeList(res.data.data)
                dispatch(action)
            })
    }
)