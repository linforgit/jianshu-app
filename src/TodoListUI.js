import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
	return (
		<div style={{margin: 10}}>
			<div>
				<Input
					value={props.inputValue}
					style={{width: 300, marginRight: 10}}
					onChange={props.handleInputChange}
					onKeyUp={props.handleKeyUp}
				/>
				<Button onClick={props.handleBtnClick} type="primary">提交</Button>
			</div>
			<List
				style={{width: 300, marginTop: 10}}
				bordered
				dataSource={ props.list }
				renderItem={ (item, index) => (
					<List.Item onClick={ () => {props.handleDeleteItem(index)}}>
						{item}
					</List.Item>
				)}
			/>
		</div>
	)
}

export default TodoListUI;