//takeEvery 能捕捉每一个action类型
//put 这里面不用store，用put传数据
import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';
// import store from './index.js'

function* getInitList(){
	try {
		const res = yield axios.get("/api/todolist");
		const action = initListAction(res.data);
		yield put(action);
	}catch(e) {
		console.log("/api/todolist网络请求失败");
	}
	
	// axios.get("/api/todolist").then((res)=> {
	// 	const data = res.data;
	// 	const action = initListAction(res.data);
	// 	store.dispatch(action);
	// })
}

//generator 函数
function* mySaga(){
	//捕获每一次派发出来的类型GET_INIT_LIST，然后执行后面的方法
	yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;