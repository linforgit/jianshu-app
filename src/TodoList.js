import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store/';

class App extends Component {
	
	constructor(props) {
	    super(props);
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		store.subscribe(this.handleStoreChange)
		console.log(this.state)
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
					/>
					<Button onClick={this.handleBtnClick} type="primary">提交</Button>
				</div>
				<List
					style={{width: 300, marginTop: 10}}
					bordered
					dataSource={this.state.list}
					renderItem={item => (
					<List.Item>
						{item}
					</List.Item>
				  )}
				/>
			</div>
		)
	}
	
	handleInputChange(e){
		const action = {
			type: "change_input_value",
			value: e.target.value
		}
		store.dispatch(action);
	}
	
	handleStoreChange(){
		console.log('store change');
		this.setState(store.getState())
	}
	
	handleBtnClick(){
		const action = {
			type: "add_toto_item",
			
		};
		store.dispatch(action)
	}
}


export default App;
