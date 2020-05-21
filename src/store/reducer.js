import { combineReducers } from 'redux-immutable';
//as的写法是将reducer改个别名，不然两个reducer冲突了
import { reducer as headerReducer} from '../common/header/store';

const reducer = combineReducers({
	header: headerReducer
})

export default reducer;
