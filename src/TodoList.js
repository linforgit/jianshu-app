import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store/';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionType'

class App extends Component {
	
	constructor(props) {
	    super(props);
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleKeyUp = this.handleKeyUp.bind(this);
		store.subscribe(this.handleStoreChange)
	}
	
	render(){
		return (
			<div style={{margin: 10}}>
				<div>
					<Input
						value={ this.state.inputValue } 
						placeholder="todo info" 
						style={{width: 300, marginRight: 10}}
						onChange={this.handleInputChange}
						onKeyUp={this.handleKeyUp}
					/>
					<Button onClick={this.handleBtnClick} type="primary">提交</Button>
				</div>
				<List
					style={{width: 300, marginTop: 10}}
					bordered
					dataSource={this.state.list}
					renderItem={ (item, index) => (
					<List.Item onClick={this.handleDeleteItem.bind(this,index)}>
						{item}
					</List.Item>
				  )}
				/>
			</div>
		)
	}
	
	handleInputChange(e){
		const action = {
			type: CHANGE_INPUT_VALUE,
			value: e.target.value
		}
		store.dispatch(action);
	}
	
	handleStoreChange(){
		this.setState(store.getState())
	}
	
	handleBtnClick(){
		const action = {
			type: ADD_TODO_ITEM,
			
		};
		store.dispatch(action)
	}
	
	handleKeyUp(e){
		if(e.keyCode === 13){
			const action = {
				type: ADD_TODO_ITEM,		
			};
			store.dispatch(action)
		}
	}
	
	handleDeleteItem(index){
		const action = {
			type: DELETE_TODO_ITEM,
			index
		}
		store.dispatch(action);
	}
}


export default App;
