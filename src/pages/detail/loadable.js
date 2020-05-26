import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
	loader: () => import("./"),//这里的import和上面的不同，是异步加载的意思
	loading() {//还没载完页面的时候一般有个转圈圈过程
		return <div>正在加载</div>
	}
})

export default () => <LoadableComponent/>