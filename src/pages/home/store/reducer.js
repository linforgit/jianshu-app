import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 0,
	showScroll: false
})

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	})
}

const addArticleList = (state, action) => {
	return state.merge({
		// return state.set("articleList", state.get("articleList").concat(action.list))
		"articleList": state.get("articleList").concat(action.list),
		"articlePage": action.nextPage
	})
}

export default (state = defaultState, action) => {
	switch(action.type){
		case actionTypes.CHANGE_HOME_DADA:
			return changeHomeData(state, action);
		case actionTypes.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		case actionTypes.TOGGLE_SCROLL_SHOW:
			return state.set("showScroll", action.isShow);
		default:
			return state;
	}
}
