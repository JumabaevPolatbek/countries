import { put ,call, take, spawn} from 'redux-saga/effects'
import { ActionsCountrie } from '../actions/countrieActions';
import { ActionCountries } from '../actions/countriesAction';
import { ActionsTheme } from '../actions/themeActions';


function* loadCountries(): any {
    const {type} = yield take(ActionCountries.FETCH);
    if (type === ActionCountries.FETCH) {
        const request = yield call(fetch, 'https://restcountries.com/v2/all');
        const data = yield call([request, request.json]);
        yield put({
            type: ActionCountries.SET_FETCH,
            payload:data
        })
    }
    // const request = yield call(fetch, 'https://restcountries.com/v2/all');
    // const data = yield call([request, request.json]);
    // yield put({
    //     type: ActionCountries.SET_FETCH,
    //     payload:data
    // })
}

// function* homePage() {
//     yield takeEvery(ActionCountries.FETCH, loadCountries);
    
// }

function* getCountriePage():any {
    const { page } = yield take(ActionsCountrie.FETCH_COUNTRIE);
    console.log(page)
    const request = yield call(fetch, `https://restcountries.com/v2/alpha/${page}`);
    const data = yield call([request, request.json]);
    yield put({
        type: ActionsCountrie.SET_COUNTRIE,
        payload:data
    })
}

// function* countriePage():any {
//     yield put({
//         type: ActionsCountrie.SET_COUNTRIE,
//         payload:getCountriePage()
//     })
// }


function* changeTheme(): any {
    while (true) {
        const { payload } = yield take(ActionsTheme.CHANGE);
    }
}
function* setDark() {
    yield put({
        type: ActionsTheme.CHANGE,
        payload:changeTheme()?false:true
    })
}

function* rootSaga() {
    yield spawn(setDark)
    yield spawn(loadCountries);
    yield spawn(getCountriePage);
}

export default rootSaga