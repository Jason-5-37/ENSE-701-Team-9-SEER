import { combineReducers } from 'redux-immutable';
import { reducer as Searchreducer } from '../page/Search_article/store/index';
import { reducer as Submitreducer } from '../page/Submit_article/store/index';

const reducer = combineReducers({
    Search: Searchreducer,
    Submit:Submitreducer
})

export default reducer;