import React,{ Component } from 'react';
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) => {
						const imgUrl = item.get("imgUrl");
						// require不能引入变量,只能采用路径+变量的方式
						let img = require('../../../statics/' + imgUrl)
						return <RecommendItem imgUrl={img} key={item.get("id")} />
					})
				}
			</RecommendWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(["home", "recommendList"])
})

export default connect(mapState, null)(Recommend);