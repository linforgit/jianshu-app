import React, { Component } from 'react';
import store from './store/';
import { getInputChangeAction, getAddItemAction, GetDeleteItemAction, initListAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class App extends Component {
	
	constructor(props) {
	    super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.state = store.getState();
		store.subscribe(this.handleStoreChange);
	}
	
	render(){
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleKeyUp={this.handleKeyUp}
				handleBtnClick={this.handleBtnClick}
				handleDeleteItem={this.handleDeleteItem}
			/>
		)
	}
	
	componentDidMount(){
		axios.get("/api/todolist").then((res)=> {
			const action = initListAction(res.data);
			store.dispatch(action);
		})
	}
	
	handleStoreChange(){
		this.setState(store.getState());
	}
	
	handleInputChange(e){
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action)
	}
	
	handleKeyUp(e){
		if(e.keyCode === 13){
			const action = getAddItemAction();
			store.dispatch(action)
		}
	}
	
	handleBtnClick(){
		const action = getAddItemAction();
		store.dispatch(action)
	}
	
	handleDeleteItem(index){
		const action = GetDeleteItemAction(index);
		store.dispatch(action)
	}
	
}

export default App;
