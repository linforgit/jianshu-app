import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	title: '',
	content: ''
})

const getDetail = (state, action) => {
	return state.merge({
		title: action.title,
		content: action.content
	})
}

export default (state = defaultState, action) => {
	switch(action.type){
		case actionTypes.CHANGE_DETAIL:
			return getDetail(state, action)
		default: 
			return state;
	}
}