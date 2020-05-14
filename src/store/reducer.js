import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionType';

const defaultState = {
	inputValue: '',
	list: []
}

//state：所有存储的数据，即store上一次存储的数据
//reducer可以接收state，但不能修改state
export default (state = defaultState, action) => {
	if(action.type === CHANGE_INPUT_VALUE){
		const newState = JSON.parse(JSON.stringify(state));//深拷贝
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === ADD_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state));//深拷贝
		newState.list.push(newState.inputValue)
		newState.inputValue = ""
		return newState;
	}
	if(action.type === DELETE_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state));//深拷贝
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}