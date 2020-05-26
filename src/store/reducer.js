import { combineReducers } from 'redux-immutable';
//as的写法是将reducer改个别名，不然两个reducer冲突了
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: detailReducer,
	login: loginReducer
})

export default reducer;
