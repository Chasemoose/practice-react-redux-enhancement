import * as types from './github.types'
import API from './github.api'


// export const getRepos = (login) => dispatch => {
//     const api = new API()
//     const {login} = getState()
//     api.getRepos(login).then(data => dispatch(setRepos(data)))
// }

export const getRepos = (login) => async (dispatch) => {
    try {
        const api = new API()
        const data = await api.getRepos(login)
        dispatch(setRepos(data))
    } catch (error) {
        console.error('Error fetching repos:', error)
    }
}


export const setRepos = repos => {
    return {
        type: types.SET_REPOS   ,
        payload: {
            repos
        }
    }
}


export const setPhrase = phrase => {
    return {
        type: types.SET_PHRASE,
        payload: {
            phrase
        } 
    }
}

export const setLogin = login => {
    return {
        type: types.SET_LOGIN,
        payload: {
            login
        }
        
    }
}