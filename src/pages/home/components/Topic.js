import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import topicImg from '../../../statics/tianqi.png';

class Topic extends Component {
	render() {
		return (
			<TopicWrapper>
				{
					this.props.list.map((item) => (
							<TopicItem key={item.get("id")}>
								<img className="topic-pic" alt="Topic" src={topicImg} />
								{ item.get("title") }
							</TopicItem>
					))
				}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.get("home").get("topicList")
})

export default connect(mapStateToProps, null)(Topic);