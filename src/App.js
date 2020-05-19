import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconGlobalStyle } from './statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
	render(){
		return (
			<div>
				<GlobalStyle />
				<IconGlobalStyle />
				<Header />
			</div>
		)
	}
}
export default App;
