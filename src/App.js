import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { IconGlobalStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';

class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<GlobalStyle />
				<IconGlobalStyle />
				<Header />
			</Provider>
		)
	}
}
export default App;
