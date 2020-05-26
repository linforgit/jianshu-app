import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button,
} from './style';
import { Link } from 'react-router-dom';

class Header extends Component {
	
	render(){
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					{
						login ? 
						<NavItem onClick={logout} className="right">退出</NavItem> :
						<Link to="/login"><NavItem className="right">登录</NavItem></Link>
					}
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={500}
							classNames="slide"
						>
							<NavSearch
								className={focused ? "focused": ""}
								onFocus={ () => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? "focused iconfont zoom": "iconfont zoom"}>&#xe623;</i>
						{ this.getListArea() }
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className="writing">
							<i className="iconfont">&#xe6e5;</i>
							写文章
						</Button>
					</Link>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
	
	getListArea() {
		const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const jsList = list.toJS();//list是immutable对象，转为js对象才可用list[i]这样取数据
		const pageList = [];
		if(jsList.length){//这一步是为了防止页面一进来还没开始请求数据，遍历出空内容
			for(let i = (page - 1) * 10; i < page * 10; i++){
				if(jsList[i]){
					pageList.push(
						<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
					)
				}
			}
		}
		if(focused || mouseIn){
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={()=>{handleChangePage(page, totalPage, this.spinIcon)}}
						>
							<i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{ pageList }
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}
}

const mapStateToProps = (state) => {
	//使用了immutable后state.header的数据其实是immutable的数据了，不能再打.调用
	//state是js对象，header是immutable对象
	return {
		//更优雅的写法
		focused: state.getIn(["header", "focused"]),
		// focused: state.get("header").get("focused")
		mouseIn: state.getIn(["header", "mouseIn"]),
		list: state.getIn(["header", "list"]),
		page: state.getIn(["header", "page"]),
		totalPage: state.getIn(["header", "totalPage"]),
		login: state.getIn(["login", "login"])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list){
			if(list.size === 0){
				dispatch(actionCreators.getList());
			}
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
			if(originAngle){
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
			page < totalPage?page++:page = 1;
			dispatch(actionCreators.changePage(page));
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
