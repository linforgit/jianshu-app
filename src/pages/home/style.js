import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`;

export const HomeLeft = styled.div`
	float: left;
	width: 625px;
	margin-left: 15px;
	margin-top: 30px;
	.banner-img{
		width: 625px;
	}
`;

export const HomeRight = styled.div`
	float: right;
	margin-left: 15px;
	margin-top: 30px;
`;

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 10px;
	line-height: 32px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		float: left;
		display: block;
		width: auto;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block,
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		margin-top: 10px;
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;