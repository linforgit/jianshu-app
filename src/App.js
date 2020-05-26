import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { IconGlobalStyle } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Login from './pages/login';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Write from './pages/write';
import store from './store';

class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<div>
					<GlobalStyle />
					<IconGlobalStyle />
					<BrowserRouter>
						<Header />
						<div>
							<Route path="/login" exact component={ Login }></Route>
							<Route path="/" exact component={ Home }></Route>
							<Route path="/detail/:id" exact component={ Detail }></Route>
							<Route path="/write" exact component={ Write }></Route>
						</div>
					</BrowserRouter>
				</div>
			</Provider>
		)
	}
}
export default App;
