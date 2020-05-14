const defaultState = {
	inputValue: '123',
	list: [1,2]
}

//state：所有存储的数据，即store上一次存储的数据
//reducer可以接收state，但不能修改state
export default (state = defaultState, action) => {
	if(action.type === "change_input_value"){
		const newState = JSON.parse(JSON.stringify(state));//深拷贝
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === "add_toto_item"){
		const newState = JSON.parse(JSON.stringify(state));//深拷贝
		newState.list.push(newState.inputValue)
		newState.inputValue = ""
		return newState;
	}
	return state;
}