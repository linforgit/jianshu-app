import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: "社会热点",
	},{
		id: 2,
		title: "手绘"
	},{
		id: 3,
		title: "军事"
	}],
	articleList: [{
		id: 11,
		title: "那些没有参加过高考的孩子,现在怎么样了",
		desc: "今天是高考的第一天,考场上的,都是千禧宝宝,2011年,上映过一部高考题材的纪录片《中国门》,这个名字 起的很形象,因为高考像是中国人...",
		imgUrl: "http://b-ssl.duitang.com/uploads/item/201706/27/20170627012435_mJLiX.thumb.700_0.jpeg"
	},{
		id: 22,
		title: "那些没有参加过高考的孩子,现在怎么样了",
		desc: "今天是高考的第一天,考场上的,都是千禧宝宝,2011年,上映过一部高考题材的纪录片《中国门》,这个名字 起的很形象,因为高考像是中国人...",
		imgUrl: "http://b-ssl.duitang.com/uploads/item/201706/27/20170627012435_mJLiX.thumb.700_0.jpeg"
	},{
		id: 32,
		title: "那些没有参加过高考的孩子,现在怎么样了",
		desc: "今天是高考的第一天,考场上的,都是千禧宝宝,2011年,上映过一部高考题材的纪录片《中国门》,这个名字 起的很形象,因为高考像是中国人...",
		imgUrl: "http://b-ssl.duitang.com/uploads/item/201706/27/20170627012435_mJLiX.thumb.700_0.jpeg"
	}]
})

export default (state = defaultState, action) => {
	switch(action.type){
		
		default:
			return state;
	}
}
