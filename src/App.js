import React, { Component,Fragment } from 'react';
import axios from 'axios';

class App extends Component {
	

	constructor(props){
		super(props);
		this.state = {
			show: true
		};
		this.handleToggle = this.handleToggle.bind(this);
	}
	
	render(){
		return (
			<Fragment>
				<div className={this.state.show?"show":"hide"}>hello world</div>
				<button onClick={this.handleToggle}>toggle</button>
			</Fragment>
		);
	}
	
	handleToggle(){
		this.setState(() => ({
			show: this.state.show ? false : true
		}))
	}
	
	componentDidMount(){
		axios.get("/api/todolist").then(res=>{
			console.log(res)
		})
	}
	
}


export default App;
