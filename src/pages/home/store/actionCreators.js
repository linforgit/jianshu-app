import axios from 'axios';
import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
	type: actionTypes.CHANGE_HOME_DADA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get("/api/home.json").then(res => {
			const result = res.data.data;
			dispatch(changeHomeData(result));
		})
	}
}

export const getMoreList = (page) => {
	//redux-thunk提供的特性，可以返回函数
	return (dispatch) => {
		axios.get("/api/homeList.json?page=" + page).then(res => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		})
	}
}

export const toggleScrollShow = (isShow) => ({
	type: actionTypes.TOGGLE_SCROLL_SHOW,
	isShow
})